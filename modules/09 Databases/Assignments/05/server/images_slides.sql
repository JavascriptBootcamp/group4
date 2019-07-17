-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2019 at 02:46 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `images_slides`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `name`) VALUES
(1, 'numbers'),
(2, 'cars'),
(3, 'synthesizers');

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE `pictures` (
  `id` int(11) NOT NULL,
  `albumId` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `src` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`id`, `albumId`, `name`, `src`) VALUES
(1, 1, 'numbers', 'https://upload.wikimedia.org/wikipedia/commons/8/87/TVE_La1_-_Logo_2008.png'),
(2, 1, 'numbers', 'http://nebula.wsimg.com/cfb133246fb6949808b53af3421575e9?AccessKeyId=5F480AA257F587756A6D&disposition=0&alloworigin=1'),
(3, 1, 'numbers', 'https://cdn.dribbble.com/users/271641/screenshots/1531994/num3.gif'),
(4, 1, 'numbers', 'https://steamuserimages-a.akamaihd.net/ugc/932690417985966398/2E1D48DE5B5F4D5CBCA137E9772474BD9098BC16/'),
(5, 1, 'numbers', 'https://static.planetminecraft.com/files/resource_media/screenshot/1249/5_4330267_lrg.jpg'),
(6, 1, 'numbers', 'https://blog.solidsignal.com/wp-content/uploads/2012/07/number6.jpg'),
(7, 1, 'numbers', 'https://steemitimages.com/DQmfCYiikJ7zeJLoRTD14xWwJ3r9mdUErf43tBwGf1ve9La/php-7.jpg'),
(8, 1, 'numbers', 'http://clipart-library.com/image_gallery2/8-Number-PNG.png'),
(9, 1, 'numbers', 'http://mathematics-in-europe.eu/wp-content/uploads/2016/02/3_playing_cards-3.jpg'),
(10, 1, 'numbers', 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/windows-10-redmond-796x448.jpg'),
(11, 2, 'cars', 'https://autocosmoscloudstorage.blob.core.windows.net/clasificados/Large/chevrolet/vivant/16l/AZ_bdac99d966924198a3454f2c280012a7.jpg'),
(12, 2, 'cars', 'https://www.gettel.com/inventoryphotos/4479/jtdepraexlj033327/sp/5.jpg?height=400'),
(13, 2, 'cars', 'https://www.sunnykingtoyota.com/assets/stock/colormatched_01/white/640/cc_2016toc040002_01_640/cc_2016toc040002_01_640_1f9.jpg?height=400'),
(14, 2, 'cars', 'https://thenypost.files.wordpress.com/2019/05/toyota-0137.jpg?quality=90&strip=all&w=1200'),
(15, 2, 'cars', 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/retail/july-2019/01-images/july-silverado-1500-double-cab-homepage-masthead-xl-2500x1000.jpg?imwidth=1200'),
(16, 2, 'cars', 'https://www.cstatic-images.com/car-pictures/xl/USC60BMC111A021001.jpg'),
(17, 2, 'cars', 'https://images-na.ssl-images-amazon.com/images/I/81bNkM6hDnL._SX466_.jpg'),
(18, 2, 'cars', 'https://cdn.jdpower.com/Models/400x200/2019-Lamborghini-Huracan-Performante.jpg'),
(19, 2, 'cars', 'https://www.tyrepress.com/wp-content/uploads/2015/07/All-New-Ford-Fiesta-BlueCar.jpg?w=640'),
(20, 2, 'cars', 'http://www.milesperhr.com/wp-content/uploads/2016/09/1978-BMW-M1.jpg'),
(21, 3, 'synthesizers', 'https://static.roland.com/assets/images/products/gallery/jd-xa_gal.jpg'),
(22, 3, 'synthesizers', 'https://www.worldofmusic.com.au/wp-content/uploads/2018/08/Prod_4732_Orig.jpg'),
(23, 3, 'synthesizers', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Casio_CZ-1.jpg'),
(24, 3, 'synthesizers', 'https://cdn.britannica.com/s:300x300/12/2912-004-1C205CF6.jpg'),
(25, 3, 'synthesizers', 'https://www.theguitarjunky.com/wp-content/uploads/2019/03/best-synthesizers-for-beginners.jpg'),
(26, 3, 'synthesizers', 'https://musicplayers.com/reviews/keyboard/2017/images/Accelerator_angle_large.jpg'),
(27, 3, 'synthesizers', 'https://producelikeapro.com/blog/wp-content/uploads/2019/04/The-Best-Wavetable-Synthesizers_6-1024x576.jpg'),
(28, 3, 'synthesizers', 'https://s3.amazonaws.com/factmag-images/wp-content/uploads/2015/04/03230656/modal-008-150415-616x439.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
