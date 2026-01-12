-- ============================================
-- DATABASE SCHEMA FOR FORM HANDLING SYSTEM
-- Last Updated: 2026-01-11
-- ============================================

-- This file contains the complete database structure
-- For migrations, see /migrations folder

-- ============================================
-- TABLE: clients
-- ============================================
CREATE TABLE `clients` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_code` VARCHAR(50) UNIQUE NOT NULL,
  `client_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `phone` VARCHAR(50),
  `status` ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_client_code` (`client_code`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: products
-- ============================================
CREATE TABLE `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_code` VARCHAR(50) UNIQUE NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_product_code` (`product_code`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: client_products
-- ============================================
CREATE TABLE `client_products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `activated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE,
  UNIQUE KEY `unique_client_product` (`client_id`, `product_id`),
  INDEX `idx_client_id` (`client_id`),
  INDEX `idx_product_id` (`product_id`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: client_form_data (NEW)
-- Purpose: Store all form submissions from client websites
-- ============================================
CREATE TABLE `client_form_data` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_id` INT NOT NULL,
  `form_type` ENUM('contact', 'training_registration') NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50),
  `company` VARCHAR(255),
  `message` TEXT,
  `form_data_json` JSON COMMENT 'Complete form data in JSON format',
  `ip_address` VARCHAR(45),
  `user_agent` VARCHAR(500),
  `status` ENUM('new', 'read', 'contacted', 'completed', 'spam') DEFAULT 'new',
  `submitted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `read_at` TIMESTAMP NULL,
  `processed_at` TIMESTAMP NULL,
  `notes` TEXT COMMENT 'Internal notes about this submission',
  FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE,
  INDEX `idx_client_id` (`client_id`),
  INDEX `idx_form_type` (`form_type`),
  INDEX `idx_status` (`status`),
  INDEX `idx_submitted_at` (`submitted_at`),
  INDEX `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: admin_users
-- ============================================
CREATE TABLE `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_id` INT,
  `username` VARCHAR(100) UNIQUE NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `role` ENUM('super_admin', 'client_admin', 'client_user') DEFAULT 'client_user',
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `last_login` TIMESTAMP NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE,
  INDEX `idx_username` (`username`),
  INDEX `idx_client_id` (`client_id`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- SAMPLE DATA
-- ============================================

-- Client: sjbmedia
INSERT INTO `clients` (`client_code`, `client_name`, `email`, `status`) VALUES
('sjbmedia', 'SJB Media - De Mensen Wijzer', 'info@sjbmedia.nl', 'active');

-- Products
INSERT INTO `products` (`product_code`, `product_name`, `description`, `status`) VALUES
('website', 'Website Service', 'Website hosting and management', 'active'),
('hosting', 'Hosting Service', 'Web hosting service', 'active'),
('forms', 'Form Service', 'Form submission handling and management', 'active');

-- Activate products for sjbmedia
INSERT INTO `client_products` (`client_id`, `product_id`, `status`)
SELECT c.id, p.id, 'active'
FROM `clients` c
CROSS JOIN `products` p
WHERE c.client_code = 'sjbmedia'
  AND p.product_code IN ('website', 'hosting', 'forms');

-- Admin user for sjbmedia
-- Username: sjbmedia
-- Password: sjbmedia2026 (CHANGE THIS IMMEDIATELY!)
INSERT INTO `admin_users` (`client_id`, `username`, `password_hash`, `email`, `role`, `status`)
SELECT c.id, 'sjbmedia', '$2a$10$rKZxQxVkKqNqYqGqYqGqYuO7xQxVkKqNqYqGqYqGqYuO7xQxVkKqNq', 
       'info@sjbmedia.nl', 'client_admin', 'active'
FROM `clients` c
WHERE c.client_code = 'sjbmedia';

