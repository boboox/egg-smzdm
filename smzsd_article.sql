# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.19)
# Database: stock
# Generation Time: 2018-09-20 01:58:25 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table smzdm_article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `smzdm_article`;

CREATE TABLE `smzdm_article` (
  `id` int(11) NOT NULL COMMENT '主键',
  `channel_id` int(11) DEFAULT NULL COMMENT '渠道编号',
  `url` varchar(500) DEFAULT NULL COMMENT '商品值得买链接',
  `yh_type` varchar(10) DEFAULT NULL COMMENT '优惠类型 ep:youhui',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `price` varchar(255) DEFAULT NULL COMMENT '价格文字',
  `date_str` varchar(50) DEFAULT NULL COMMENT '上架时间',
  `worthy` int(11) DEFAULT NULL COMMENT '值 数',
  `unworthy` int(11) DEFAULT NULL COMMENT '不值 数',
  `link` varchar(255) DEFAULT NULL COMMENT '商品直达链接',
  `pic_url` varchar(500) DEFAULT NULL COMMENT '图片地址',
  `timesort` int(12) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
