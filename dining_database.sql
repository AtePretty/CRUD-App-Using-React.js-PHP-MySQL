-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 02:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dining_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `dining_class`
--

CREATE TABLE `dining_class` (
  `id` int(100) NOT NULL,
  `dining_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `food_class`
--

CREATE TABLE `food_class` (
  `id` int(100) NOT NULL,
  `food_name` text NOT NULL,
  `menu_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_class`
--

CREATE TABLE `item_class` (
  `id` int(100) NOT NULL,
  `item_name` text NOT NULL,
  `item_img` text NOT NULL,
  `food_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_class`
--

CREATE TABLE `menu_class` (
  `id` int(100) NOT NULL,
  `menu_name` text NOT NULL,
  `menu_img` text NOT NULL,
  `small_desc` text NOT NULL,
  `dining_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_description`
--

CREATE TABLE `menu_description` (
  `id` int(100) NOT NULL,
  `description` text NOT NULL,
  `menu_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dining_class`
--
ALTER TABLE `dining_class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `food_class`
--
ALTER TABLE `food_class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `menu_id_foreign_key_food` (`menu_id`);

--
-- Indexes for table `item_class`
--
ALTER TABLE `item_class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_id_foreign_key` (`food_id`);

--
-- Indexes for table `menu_class`
--
ALTER TABLE `menu_class`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `dining_id_foreign_key` (`dining_id`);

--
-- Indexes for table `menu_description`
--
ALTER TABLE `menu_description`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_id_foreign_key_desc` (`menu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dining_class`
--
ALTER TABLE `dining_class`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `food_class`
--
ALTER TABLE `food_class`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `item_class`
--
ALTER TABLE `item_class`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `menu_class`
--
ALTER TABLE `menu_class`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `menu_description`
--
ALTER TABLE `menu_description`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `food_class`
--
ALTER TABLE `food_class`
  ADD CONSTRAINT `menu_id_foreign_key_food` FOREIGN KEY (`menu_id`) REFERENCES `menu_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `item_class`
--
ALTER TABLE `item_class`
  ADD CONSTRAINT `food_id_foreign_key` FOREIGN KEY (`food_id`) REFERENCES `food_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu_class`
--
ALTER TABLE `menu_class`
  ADD CONSTRAINT `dining_id_foreign_key` FOREIGN KEY (`dining_id`) REFERENCES `dining_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu_description`
--
ALTER TABLE `menu_description`
  ADD CONSTRAINT `menu_id_foreign_key_desc` FOREIGN KEY (`menu_id`) REFERENCES `menu_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
