-- Migration: Create Form Handling System for sjbmedia
-- Date: 2026-01-11
-- Description: Creates tables for client form submissions (contact & training registration)

-- ============================================
-- 1. Create clients table (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS `clients` (
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
-- 2. Create products table (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS `products` (
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
-- 3. Create client_products junction table
-- ============================================
CREATE TABLE IF NOT EXISTS `client_products` (
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
-- 4. Create client_form_data table (NEW)
-- ============================================
CREATE TABLE IF NOT EXISTS `client_form_data` (
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
  INDEX `idx_client_id` (`client_id`),
  INDEX `idx_form_type` (`form_type`),
  INDEX `idx_status` (`status`),
  INDEX `idx_submitted_at` (`submitted_at`),
  INDEX `idx_email` (`email`),
  CONSTRAINT `fk_client_form_data_client` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. Insert sjbmedia client
-- ============================================
INSERT INTO `clients` (`client_code`, `client_name`, `email`, `phone`, `status`)
VALUES ('sjbmedia', 'SJB Media - De Mensen Wijzer', 'info@sjbmedia.nl', NULL, 'active')
ON DUPLICATE KEY UPDATE 
  `client_name` = VALUES(`client_name`),
  `email` = VALUES(`email`),
  `updated_at` = CURRENT_TIMESTAMP;

-- ============================================
-- 6. Insert products
-- ============================================
INSERT INTO `products` (`product_code`, `product_name`, `description`, `status`)
VALUES 
  ('website', 'Website Service', 'Website hosting and management', 'active'),
  ('hosting', 'Hosting Service', 'Web hosting service', 'active'),
  ('forms', 'Form Service', 'Form submission handling and management', 'active')
ON DUPLICATE KEY UPDATE 
  `product_name` = VALUES(`product_name`),
  `description` = VALUES(`description`),
  `updated_at` = CURRENT_TIMESTAMP;

-- ============================================
-- 7. Activate products for sjbmedia
-- ============================================
INSERT INTO `client_products` (`client_id`, `product_id`, `status`)
SELECT 
  c.id,
  p.id,
  'active'
FROM `clients` c
CROSS JOIN `products` p
WHERE c.client_code = 'sjbmedia'
  AND p.product_code IN ('website', 'hosting', 'forms')
ON DUPLICATE KEY UPDATE 
  `status` = 'active';

-- ============================================
-- 8. Create admin users table (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS `admin_users` (
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
-- 9. Insert default admin user for sjbmedia
-- ============================================
-- Password: 'sjbmedia2026' (hashed with bcrypt)
-- NOTE: Change this password immediately after first login!
INSERT INTO `admin_users` (`client_id`, `username`, `password_hash`, `email`, `role`, `status`)
SELECT
  c.id,
  'sjbmedia',
  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  'info@sjbmedia.nl',
  'client_admin',
  'active'
FROM `clients` c
WHERE c.client_code = 'sjbmedia'
ON DUPLICATE KEY UPDATE
  `email` = VALUES(`email`),
  `updated_at` = CURRENT_TIMESTAMP;

