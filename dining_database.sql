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

--
-- Dumping data for table `dining_class`
--

INSERT INTO `dining_class` (`id`, `dining_name`) VALUES
(1, 'Breakfast'),
(2, 'Brunch'),
(3, 'Luncheon'),
(4, 'Afternoon and High Tea'),
(5, 'Dinner'),
(6, 'Super'),
(7, 'Room Service'),
(8, 'Camping'),
(9, 'dummy dining'),
(10, 'another dummy'),
(11, 'last dummy'),
(12, 'for real, last na'),
(13, 'last na jud'),
(14, 'sure na ni'),
(15, 'happy na si me'),
(16, 'here again'),
(17, 'bagong category'),
(18, '12:30AM na'),
(19, 'nagising na baby ko'),
(20, 'inaantok na ako'),
(21, 'response in console log'),
(22, 'gising na ako'),
(23, 'i use return'),
(24, 'i use return'),
(25, 'i use return'),
(26, 'i use return'),
(27, 'set to null'),
(28, 'hello null'),
(29, 'set null'),
(30, 'set null'),
(31, 'null siya'),
(32, 'null siya'),
(33, 'tama na siguro'),
(34, 'final na jud'),
(35, 'naa na sad ko diri'),
(36, 'new dining name'),
(37, 'last food menu');

-- --------------------------------------------------------

--
-- Table structure for table `food_class`
--

CREATE TABLE `food_class` (
  `id` int(100) NOT NULL,
  `food_name` text NOT NULL,
  `menu_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food_class`
--

INSERT INTO `food_class` (`id`, `food_name`, `menu_id`) VALUES
(1, 'Fruits', 1),
(2, 'just dummy food', 21),
(3, 'Coffee', 4),
(4, 'bbq', 11),
(5, 'Baked Goods', 1),
(6, 'Ice Cream', 5),
(7, 'fried chicken', 4);

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

--
-- Dumping data for table `item_class`
--

INSERT INTO `item_class` (`id`, `item_name`, `item_img`, `food_id`) VALUES
(1, 'Banana', 'IMG-63bf756d499936.40954149.jpg', 1),
(2, 'Apple', 'IMG-63bf7634a215d7.17550518.jpg', 1),
(3, 'Indian Food', 'IMG-63bf92dd70ea56.27915004.jpg', 5),
(4, 'Saging', 'IMG-63bfb1b4cd13c7.92477227.jpg', 3),
(5, 'Goat', 'IMG-63bfb1f2945378.62620583.jpg', 3),
(6, 'Star Apple', 'IMG-63bfb2a0d81913.70624650.jpg', 6),
(7, 'Dummy fruit', 'IMG-63bfb54c6beec0.08134788.jpg', 1),
(8, 'Thank you so much, nakuha ko na po ang API', 'IMG-63bff3411f0d25.33082594.jpg', 3),
(9, 'Listen without Interupting', 'IMG-63bff3b1da4206.34522231.jpg', 5),
(10, 'one last time, so I can start to another coding', 'IMG-63bff77f0a6102.22105420.png', 7);

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

--
-- Dumping data for table `menu_class`
--

INSERT INTO `menu_class` (`id`, `menu_name`, `menu_img`, `small_desc`, `dining_id`) VALUES
(1, 'Continental Breakfast', 'IMG-63bcd73f357076.57421037.jpg', 'A continental breakfast is defined as “a light breakfast in a hotel, restaurant, that often includes baked goods, jam, fruit, and coffee.”', 1),
(2, 'American Breakfast', '', 'It consists usually of fried eggs, bacon, toast with butter, jelly or jam, pancakes with syrup or butter, and coffee.', 1),
(3, 'English Breakfast', '', 'An English breakfast is a breakfast consisting of cooked food such as bacon, eggs, sausages, and tomatoes. It also includes toast and tea or coffee.', 1),
(4, 'Buffet Breakfast', '', 'A breakfast buffet consists of a long table or counter where guests can serve themselves from a range of different items.', 1),
(5, 'Food', 'IMG-63be1782683e13.58849216.jpg', 'Gulay', 3),
(7, 'Avocado', '', 'Fruits, green', 5),
(9, 'dsff', '', 'sdf', 5),
(11, 'hello', '', 'sana makita ko yung bug', 3),
(13, 'dfdgf', '', 'fdgfd', 3),
(15, 'peanut butter', '', 'safgfdg', 4),
(17, 'Jasmine Tea', '', 'nvlkds', 10),
(19, 'Yehey, parang nakuha ko na', 'IMG-63be218b0d6da2.28308171.jpg', 'Totoo na to this time', 29),
(20, 'Maka-add na jud ko with peace', 'IMG-63be223fc8ce69.16435456.jpg', 'Talaga haha', 8),
(21, 'more menu', 'IMG-63be460322dab2.83036123.jpg', 'good na niya siya', 5),
(22, 'my phone', 'IMG-63be71991887a2.95783622.jpg', 'birthday ni mira kanina, di ko kilala eh haha', 12);

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
-- Dumping data for table `menu_description`
--

INSERT INTO `menu_description` (`id`, `description`, `menu_id`) VALUES
(1, 'hdskfvkfsvfdv', 1),
(2, 'water fuel', 4),
(24, 'hello', 5),
(37, 'advertisement', 5);

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
