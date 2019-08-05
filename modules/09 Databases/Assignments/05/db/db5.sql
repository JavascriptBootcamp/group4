-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: myimages
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `albums` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'surfing'),(2,'animals'),(3,'countries');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pictures` (
  `id` int(11) DEFAULT NULL,
  `albumid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `src` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
INSERT INTO `pictures` VALUES (1,1,'kelly slater','https://cdn.shopify.com/s/files/1/2445/4975/products/apex_pdp_maui01_1400x1400.jpg?v=1553625185'),(2,1,'kelly slater 2','https://media.newyorker.com/photos/5c0852e21e1d6f2d0745d019/master/w_727,c_limit/181217_r33425.jpg'),(3,1,'kelly slater 3','https://upload.wikimedia.org/wikipedia/commons/1/1b/KellySlater_byRobKeaton.jpg'),(4,1,'kelly slater 4','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETlPEWsD9EtZ8S5tm8ZBPXwPbVDWv1-RlCdvVAriU4Gebccgs'),(5,2,'animal 1','https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675.jpg'),(6,2,'animal 2','https://www.niabizoo.com/wp-content/uploads/2018/05/ms-animals-habitats-mammals.jpg'),(7,2,'animal 3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUladps8Qk6EphElR8czE-HMCZMcXkPUcVhzD-h-HTsLDlHS9m'),(8,3,'israel','https://www.touristisrael.com/wp-content/uploads/bigstock-Panorama-of-Jerusalem-old-city-848642421.jpg'),(9,3,'brazil','https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg'),(10,3,'prague','https://media.timeout.com/images/105282343/630/472/image.jpg');
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-04 14:24:27
