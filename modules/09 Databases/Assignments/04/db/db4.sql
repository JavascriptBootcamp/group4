-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: likes
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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `author` (
  `id` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `profilePic` text,
  `likes` int(11) DEFAULT NULL,
  `src` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (111,'text 1','https://www.facebook.com/gaby.buchnik','gaby','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',35,'assets/images/pic1.jpg'),(112,'text 2','https://www.facebook.com/gaby.buchnik','yosi','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',4,'assets/images/pic2.jpg'),(113,'text 3','https://www.facebook.com/gaby.buchnik','maly','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',15,'assets/images/pic3.jpg'),(114,'text 4','https://www.facebook.com/gaby.buchnik','dalya','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',4,'assets/images/pic4.jpg'),(111,'text 5','https://www.facebook.com/gaby.buchnik','gaby','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',5,'assets/images/pic5.jpg'),(111,'text 6','https://www.facebook.com/gaby.buchnik','gaby','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',4,'assets/images/pic6.jpg'),(113,'text 7','https://www.facebook.com/gaby.buchnik','maly','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',10,'assets/images/pic7.jpg'),(115,'text 8','https://www.facebook.com/gaby.buchnik','zuri','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',0,'assets/images/pic8.jpg'),(112,'text 9','https://www.facebook.com/gaby.buchnik','yosi','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',3,'assets/images/pic9.jpg'),(116,'text 10','https://www.facebook.com/gaby.buchnik','revital','https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',0,'assets/images/pic10.jpg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-04 14:24:39
