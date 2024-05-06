-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2023 at 12:24 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `product_qty` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'Kids'),
(2, 'Men'),
(3, 'Accecories'),
(4, 'Women'),
(5, 'Table'),
(6, 'Sofa');

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`id`, `user_id`, `product_id`, `product_name`, `price`, `quantity`, `order_id`, `date`) VALUES
(14, '1', '1', 'Stool', '5400', '2', 'ORD86898145', '2023-06-09'),
(15, '1', '2', 'Bean chair', '8500', '1', 'ORD10136279', '2023-06-09'),
(16, '1', '2', 'Bean chair', '8500', '2', 'ORD20677863', '2023-06-10');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` varchar(100) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `price`, `image`, `category_id`, `description`) VALUES
(1, 'Stool', '5400', 'stool.jpg', '1', 'Comfortable Tech Cloth : Like leather technology cloth, but more breathable than leather, very comfortable and soft, strong wrinkle resistance\nCreated with premium soft and durable woven fabric our Square Ottoman with Storage offers a timeless style | Perfectly completed with tapered wood legs in a dark walnut finish along with button tufting on top\nWeighing at 20.2 lbs, our Ottoman with Storage for Living Room supports a capacity of up to 250lbs\nSuper easy to assemble and maintain | Spot clean only Comfortable Tech Cloth : Like leather technology cloth, but more breathable than leather, very comfortable and soft, strong wrinkle resistance\nCreated with premium soft and durable woven fabric our Square Ottoman with Storage offers a timeless style | Perfectly completed with tapered wood legs in a dark walnut finish along with button tufting on top\nWeighing at 20.2 lbs, our Ottoman with Storage for Living Room supports a capacity of up to 250lbs\nSuper easy to assemble and maintain | Spot clean only'),
(2, 'Bean chair', '8500', 'beanchair.jpg', '1', '【Excellent Material】: Fine leather with double stitching for strength and durability. Our new material is different from traditional cotton cloth, it is light, soft and skin-friendly, stain-proof, anti-discoloration, not deformed after washing,\n【A New Spot To Chil】: Perfect for watching movies in your living room or playing video games in your basement . Chill in your new favorite chair.\n【Easy Clean】: You just need to do is clean up with wet wipes and your bean bag will look new.\n【Lightweight】:Our bean bag sofa is lightweight and let you relax in dorm rooms, rec rooms, and more'),
(3, 'Chair', '8700', 'chair.jpg', '2', 'About this item\nProduct Dimensions: Length-38 Inches, Width -39 Inches, Height 42 Inches;Color: Grey | Upholstery Material: Premium Suede(Velvet) Fabric Soft In Touch & Feel, Well Look Very Thick Base Longlasting Upto 7 Years Life Easy To Clean<Br>\nSeating Capacity: Single Seat ; Maximum Capacity: 160 Kg;Type : Manual Rocker Recliner ; Product Warranty: 01 Year<Br>\nReclining Angle : 165 Degrees.| Rock : To & Fro | Foam : 32 Density Sleepwell Feather Foam Is Used, High-Resiliency Foam Provide The Perfect Blend Of Cushion And Support From Head To Toe.;Simple Manual Latch Can Be Used Over 25000 Times. Solid Metal Frame Offering Stability Are Strength.<Br>\nLezino Is A Renowned Manufacturer Of Wide Variety Of Stylish, Modern And Sleek Indoor Furniture & With Specialization In Recliner Chairs.<Br>\nBack Style: Solid Back; Item Type Name: Recliners; Assembly Instructions: Diy'),
(4, 'ladder', '540', 'ladder.jpg', '3', 'Made of ultra-sturdy, industrial-grade steel to provide superior performance and long-lasting durability with anti-skid, wide steel steps and double-grip technology\nEquipped with a unique safety-clutch lock that prevents jiggling even at the topmost step and folding while the ladder is in use\nPrecisely ribbed steps furnish a firm grip while the knee guard offers greater support and protection while climbing\nEquipped with non-marring PVC shoes that are braced for extra firmness without causing any damage or scratches on floors\nSuper-lightweight and foldable for compact storage\nTested with international standard under lab conditions\nNo. of Steps: 3; Colour: Blue and White\nMade in India Made of ultra-sturdy, industrial-grade steel to provide superior performance and long-lasting durability with anti-skid, wide steel steps and double-grip technology\nEquipped with a unique safety-clutch lock that prevents jiggling even at the topmost step and folding while the ladder is in use\nPrecisely ribbed steps furnish a firm grip while the knee guard offers greater support and protection while climbing\nEquipped with non-marring PVC shoes that are braced for extra firmness without causing any damage or scratches on floors\nSuper-lightweight and foldable for compact storage\nTested with international standard under lab conditions\nNo. of Steps: 3; Colour: Blue and White\nMade in India');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `date`) VALUES
(1, 'Aakash', 'aakashvip327@gmail.com', '12345', '2023-06-05'),
(2, 'VIkas', 'vikas@gmail.com', '1234', '2023-06-05'),
(3, 'Golu', 'golu@gmail.com', '1234', '2023-06-05'),
(4, 'Arvind', 'arvind@gmail.com', '12345', '2023-06-05'),
(5, 'Cikash', 'vishla@gmail.com', '7777', '2023-06-05'),
(6, 'Dinesh', 'dd@gmail.com', '1234', '2023-06-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
