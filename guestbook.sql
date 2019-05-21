/*
Navicat MySQL Data Transfer

Source Server         : h51903
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : guestbook

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-05-21 19:07:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for contents
-- ----------------------------
DROP TABLE IF EXISTS `contents`;
CREATE TABLE `contents` (
  `cid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) unsigned DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  `dateline` int(10) unsigned DEFAULT '0',
  `support` int(11) unsigned DEFAULT '0',
  `oppose` int(11) unsigned DEFAULT '0',
  PRIMARY KEY (`cid`),
  KEY `oppose` (`oppose`),
  KEY `uid` (`uid`),
  KEY `support` (`support`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contents
-- ----------------------------

-- ----------------------------
-- Table structure for sheet1
-- ----------------------------
DROP TABLE IF EXISTS `sheet1`;
CREATE TABLE `sheet1` (
  `id` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `jiage` varchar(255) DEFAULT NULL,
  `maximg` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sheet1
-- ----------------------------
INSERT INTO `sheet1` VALUES ('1', '../images/list/b (13).jpg', 'Galaxy A60', '1499', '(22).jpg&(7).jpg&(8).jpg&(9).jpg&(10).jpg&(12).jpg');
INSERT INTO `sheet1` VALUES ('2', '../images/list/b (4).jpg', 'Galaxy A8s', '2449', '');
INSERT INTO `sheet1` VALUES ('3', '../images/list/b (5).jpg', 'Galaxy A8s 独角精灵版', '2449', '');
INSERT INTO `sheet1` VALUES ('4', '../images/list/b (9).jpg', 'Galaxy S10+', '6999', '');
INSERT INTO `sheet1` VALUES ('5', '../images/list/b (6).jpg', 'Galaxy S10 128GB版本', '5999', '');
INSERT INTO `sheet1` VALUES ('6', '../images/list/b (6).jpg', 'Galaxy S10 512GB版本', '7699', '');
INSERT INTO `sheet1` VALUES ('7', '../images/list/b (16).jpg', 'Galaxy S10e', '4999', '');
INSERT INTO `sheet1` VALUES ('8', '../images/list/b (20).jpg', 'Galaxy S9', '3699', '');
INSERT INTO `sheet1` VALUES ('9', '../images/list/b (20).jpg', 'Galaxy S9+', '4699', '');
INSERT INTO `sheet1` VALUES ('10', '../images/list/b (18).jpg', 'Galaxy S8', '2798', '');
INSERT INTO `sheet1` VALUES ('11', '../images/list/b (2).jpg', 'Galaxy A6s', '1447', '');
INSERT INTO `sheet1` VALUES ('12', '../images/list/b (1).jpg', 'Galaxy A9s', '2487', '');
INSERT INTO `sheet1` VALUES ('13', '../images/list/b (14).jpg', 'Galaxy A40s', '1499', '');
INSERT INTO `sheet1` VALUES ('14', '../images/list/b (11).jpg', 'Galaxy A70', '2499', '');
INSERT INTO `sheet1` VALUES ('15', '../images/list/b (10).jpg', '三星W2019', '11999', '');
INSERT INTO `sheet1` VALUES ('16', '../images/list/b (17).jpg', 'Galaxy Note8', '6988', '');
INSERT INTO `sheet1` VALUES ('17', '../images/list/b (18).jpg', 'Galaxy S8+', '3499', '');
INSERT INTO `sheet1` VALUES ('18', '../images/list/b (22).jpg', 'Galaxy Note9', '5989', '');

-- ----------------------------
-- Table structure for sheet2
-- ----------------------------
DROP TABLE IF EXISTS `sheet2`;
CREATE TABLE `sheet2` (
  `id` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `jiage` varchar(255) DEFAULT NULL,
  `maximg` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sheet2
-- ----------------------------
INSERT INTO `sheet2` VALUES ('1', './images/list/b (13).jpg', 'Galaxy A60', '1499', '(22).jpg&(7).jpg&(8).jpg&(9).jpg&(10).jpg&(12).jpg');
INSERT INTO `sheet2` VALUES ('2', './images/list/b (4).jpg', 'Galaxy A8s', '2449', '');
INSERT INTO `sheet2` VALUES ('3', './images/list/b (5).jpg', 'Galaxy A8s 独角精灵版', '2449', '');
INSERT INTO `sheet2` VALUES ('4', './images/list/b (9).jpg', 'Galaxy S10+', '6999', '');

-- ----------------------------
-- Table structure for shoppcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppcar`;
CREATE TABLE `shoppcar` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `jiage` varchar(255) NOT NULL,
  `shuliang` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `zongjia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppcar
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(16) DEFAULT NULL,
  `password` char(32) DEFAULT NULL,
  `avatar` int(1) unsigned DEFAULT '1',
  `login_key` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2', 'qq141516', 'qq1234567', '1', null);
INSERT INTO `users` VALUES ('3', 'qq141516', 'qq123456', '1', null);
SET FOREIGN_KEY_CHECKS=1;
