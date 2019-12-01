-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 01, 2019 at 03:11 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_homepage`
--

DROP TABLE IF EXISTS `tbl_homepage`;
CREATE TABLE IF NOT EXISTS `tbl_homepage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `picture` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `quote` text NOT NULL,
  `quote_author` varchar(35) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_homepage`
--

INSERT INTO `tbl_homepage` (`ID`, `picture`, `name`, `title`, `quote`, `quote_author`) VALUES
(1, 'home-img', 'Gleb Zavizenov', 'web-developer', 'Success is not final; failure is not fatal:\r\nIt is the courage to continue that counts.', '- Winston S. Churchill');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

DROP TABLE IF EXISTS `tbl_projects`;
CREATE TABLE IF NOT EXISTS `tbl_projects` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(30) NOT NULL,
  `project_type` varchar(40) NOT NULL,
  `project_cover` varchar(30) NOT NULL,
  `project_desc` text NOT NULL,
  `project_tech` varchar(50) NOT NULL,
  `project_images` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `project_name`, `project_type`, `project_cover`, `project_desc`, `project_tech`, `project_images`) VALUES
(1, 'Portfolio', 'web-development', 'portfolio-cover.png', 'My first portfolio made with pure HTML, CSS, and JavaScript. I made it as a side project to explore JS animations and parallax libraries.', 'HTML, CSS, JavaScript', 'portfolio-showcase.png'),
(2, 'TRAA Association', 'web-development', 'traa-cover.png', 'This is a website for the Thames River Anglers Association based in London, Ontario. Their website was outdated and needed a new look as well as a responsive layout. This version is responsive and comfortable to use on both tablets and smartphones.', 'HTML, CSS, JavaScript', 'traa-showcase.png'),
(3, 'Dream Team', 'web-development', 'dream-cover.png', 'The main purpose of this website is to show members of our team that worked on a final project. Website toggles pictures from “working mode” to “chilling mode” on press of the middle button. It also displays information about each team member on press of “learn more” button.', 'HTML, CSS, JavaScript', 'dream-showcase.png'),
(4, 'Music Mixer', 'web-design/development', 'mixer-cover.png', 'This is a web app made with HTML, CSS and Vanilla JS. The main purpose of this app is to mix different parts of songs into one song. It has an interactive spinning player in the middle as well as changing background and help button.', 'HTML, CSS, JavaScript', 'mixer-showcase.png'),
(5, 'GOT video player', 'web-development', 'got-cover.png', 'This is a web app that allows users to learn more about main families from the “GOT” tv serial. It has a carousel of images and a video player with custom controls. All functionality is written in Vanilla JS.', 'HTML, CSS, JavaScript', 'got-showcase.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_techs`
--

DROP TABLE IF EXISTS `tbl_techs`;
CREATE TABLE IF NOT EXISTS `tbl_techs` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `tech_name` varchar(30) NOT NULL,
  `tech_img` varchar(30) NOT NULL,
  `tech_desc` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_techs`
--

INSERT INTO `tbl_techs` (`ID`, `tech_name`, `tech_img`, `tech_desc`) VALUES
(1, 'HTML 5', 'html.png', 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.\r\nSource: Wikipedia'),
(2, 'CSS 3', 'css.png', 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.\r\n\r\n\r\nSource: Wikipedia'),
(3, 'JavaScript', 'js.png', 'JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\r\n\r\n\r\nSource: Wikipedia'),
(4, 'SASS', 'sass.png', 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).\r\n\r\nSource: Wikipedia'),
(5, 'Node.js', 'node.png', 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser.\r\n\r\nSource: Wikipedia'),
(6, 'Adobe Photoshop', 'photoshop.png', 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, this software has become the industry standard not only in raster graphics editing, but in digital art as a whole. \r\n\r\nSource: Wikipedia'),
(7, 'Adobe Illustrator', 'ai.png', 'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud (Adobe\'s shift to monthly or annual subscription service delivered over the Internet), Illustrator CC was released.\r\n\r\nSource: Wikipedia'),
(8, 'Adobe XD', 'xd.png', 'Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. XD supports website wireframing, and creating simple, immersive, interactive click-through prototypes.\r\n\r\nSource: Wikipedia');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
