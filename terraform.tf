provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "The name of the storage account. Must be globally unique."
  type        = string
}

variable "location" {
  description = "The location where the storage account will be created."
  type        = string
  default     = "eastus"
}

variable "sku_name" {
  description = "The SKU of the storage account."
  type        = string
  default     = "Standard_LRS"
  validation {
    condition     = contains(["Standard_LRS", "Standard_GRS", "Standard_ZRS", "Premium_LRS"], var.sku_name)
    error_message = "The SKU must be one of Standard_LRS, Standard_GRS, Standard_ZRS, or Premium_LRS."
  }
}

resource "azurerm_storage_account" "storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = var.sku_name == "Premium_LRS" ? "LRS" : substr(var.sku_name, 9, 3)
  # Removed the 'kind' attribute as it is not supported in the current provider version
}

resource "azurerm_resource_group" "rg" {
  name     = "example-resource-group"
  location = var.location
}