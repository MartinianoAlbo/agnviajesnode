-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 12, 2021 at 10:32 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agenciaviajes`
--

-- --------------------------------------------------------

--
-- Table structure for table `testimoniales`
--

CREATE TABLE `testimoniales` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `correo` varchar(60) DEFAULT NULL,
  `mensaje` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `testimoniales`
--

INSERT INTO `testimoniales` (`id`, `nombre`, `correo`, `mensaje`) VALUES
(1, 'Alvaro', 'alvaro.al1493@gmail.com', 'aaaa'),
(2, 'Pri', 'pri@coreo.com', 'buenisimo '),
(3, 'Marti', 'mar@correo.com', 'excelente servicio');

-- --------------------------------------------------------

--
-- Table structure for table `viajes`
--

CREATE TABLE `viajes` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(60) DEFAULT NULL,
  `precio` varchar(10) DEFAULT NULL,
  `fecha_ida` date DEFAULT NULL,
  `fecha_vuelta` date DEFAULT NULL,
  `imagen` varchar(15) DEFAULT NULL,
  `descripcion` text,
  `disponibles` int(11) DEFAULT NULL,
  `slug` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `viajes`
--

INSERT INTO `viajes` (`id`, `titulo`, `precio`, `fecha_ida`, `fecha_vuelta`, `imagen`, `descripcion`, `disponibles`, `slug`) VALUES
(1, 'italia', '50000', '2021-10-04', '2021-10-28', 'roma', 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ', 32, 'viaje-italia'),
(2, 'Canada', '60000', '2021-10-05', '2021-10-26', 'canada', 'making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and', 25, 'viaje-canada'),
(3, 'Grecia', '40000', '2021-11-11', '2021-11-26', 'grecia', 'model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 18, 'viaje-grecia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `testimoniales`
--
ALTER TABLE `testimoniales`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `testimoniales`
--
ALTER TABLE `testimoniales`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
