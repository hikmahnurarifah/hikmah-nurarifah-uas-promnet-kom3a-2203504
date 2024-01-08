-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 12:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2203504_hikmah_nurarifah_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasiens`
--

CREATE TABLE `pasiens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` longtext DEFAULT NULL,
  `usia` longtext DEFAULT NULL,
  `jenis_kelamin` longtext DEFAULT NULL,
  `alamat` longtext DEFAULT NULL,
  `deskripsi` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasiens`
--

INSERT INTO `pasiens` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(1, 'Park Jeongwoo', '19', '', 'Korea', 'Sakit'),
(2, 'Haruto', '19', 'Laki-Laki', 'Korea', 'Sakit'),
(4, 'Junghwan', '18', 'Laki-Laki', 'Korea', 'Sakit');

-- --------------------------------------------------------

--
-- Table structure for table `pasien_puskesmas_hikmah_nurarifah`
--

CREATE TABLE `pasien_puskesmas_hikmah_nurarifah` (
  `id` int(11) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `usia` int(11) NOT NULL,
  `jenis_kelamin` varchar(10) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien_puskesmas_hikmah_nurarifah`
--

INSERT INTO `pasien_puskesmas_hikmah_nurarifah` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(1, 'Budi Santoso', 30, 'Laki-laki', 'Jl. Merdeka No. 10', 'Sakit kepala dan mata berair'),
(2, 'Dewi Rahayu', 22, 'Perempuan', 'Jl. Pahlawan No. 5', 'Demam dan nyeri tenggorokan'),
(3, 'Agus Wibowo', 40, 'Laki-laki', 'Jl. Cendrawasih No. 15', 'Nyeri pada perut bagian bawah'),
(4, 'Siti Hidayah', 28, 'Perempuan', 'Jl. Dahlia No. 3', 'Batuk berdahak dan sesak napas'),
(5, 'Rudi Setiawan', 35, 'Laki-laki', 'Jl. Anggrek No. 8', 'Mengalami panas dan berkeringat di malam hari');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` longtext DEFAULT NULL,
  `last_name` longtext DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `password` longblob DEFAULT NULL,
  `phone` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`) VALUES
(1, 'Jeongwoo', 'Park', 'pjw@gmail.com', 0x24326124313424464b364173393350535661724164744b54784b713975547a36516b4a62794d795059584f476a5a767a734631496a4d424e564f4e47, '0123456789'),
(2, 'Junkyu', 'Kim', 'junkyu@gmail.com', 0x243261243134243859646a6c476b4946384c46466f467943584579522e446136497466384d747962526a46363267474f644b5a302f415850742e674f, '0123456789'),
(3, 'Junkyu', 'Kim', 'kjk@gmail.com', 0x2432612431342453436a4b63612f6e737848443974777245724c48612e77556a6f487774576b52754c4c2e42743669344d6b396c3936384b64304b57, '0123456789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasiens`
--
ALTER TABLE `pasiens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pasien_puskesmas_hikmah_nurarifah`
--
ALTER TABLE `pasien_puskesmas_hikmah_nurarifah`
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
-- AUTO_INCREMENT for table `pasiens`
--
ALTER TABLE `pasiens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pasien_puskesmas_hikmah_nurarifah`
--
ALTER TABLE `pasien_puskesmas_hikmah_nurarifah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
