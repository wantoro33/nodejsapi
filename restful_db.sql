/*
 Navicat Premium Data Transfer

 Source Server         : mysql_lokal
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : restful_db

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 29/06/2020 07:57:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `productPrice` int(11) DEFAULT NULL,
  `description` varchar(300) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `imgUrl` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`productId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'Product 1', 2000, 'description of product 1', 'https://tiseraonline.co.id/images/computer/4B1001.064.jpg');
INSERT INTO `product` VALUES (2, 'Product 2', 5000, 'description of product 2', 'https://tiseraonline.co.id/images/computer/4B1001.065.jpg');
INSERT INTO `product` VALUES (3, 'test3', 333, 'desc 33', 'https://tiseraonline.co.id/images/computer/4B1002.003.jpg');
INSERT INTO `product` VALUES (4, 'Product 4', 6000, 'description of product 4', 'https://tiseraonline.co.id/images/computer/4B1002.014.jpg');
INSERT INTO `product` VALUES (5, 'Product 5', 7000, 'description of product 5', 'https://tiseraonline.co.id/images/computer/4B1002.015.jpg');
INSERT INTO `product` VALUES (7, 'test', 232, 'sdfs', 'sdas');
INSERT INTO `product` VALUES (9, 'test3', 333, 'desc 33', 'https://tiseraonline.co.id/images/computer/4B1002.003.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `isActive` int(11) NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
