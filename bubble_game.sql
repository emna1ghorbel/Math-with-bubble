-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 12 déc. 2025 à 21:39
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bubble_game`
--

-- --------------------------------------------------------

--
-- Structure de la table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `current_level` int(11) DEFAULT 1,
  `max_level` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `levels`
--

INSERT INTO `levels` (`id`, `user_id`, `current_level`, `max_level`) VALUES
(4, 4, 2, 2),
(17, 15, 2, 2),
(18, 15, 2, 2),
(19, 16, 2, 2),
(20, 16, 2, 2),
(21, 17, 1, 1),
(22, 17, 1, 1),
(23, 18, 2, 2),
(24, 18, 2, 2),
(25, 19, 2, 2),
(26, 19, 2, 2),
(27, 20, 1, 1),
(28, 20, 1, 1),
(29, 21, 1, 1),
(30, 21, 1, 1),
(31, 22, 1, 1),
(32, 22, 1, 1),
(33, 23, 1, 1),
(34, 23, 1, 1),
(35, 24, 1, 1),
(36, 24, 1, 1),
(37, 25, 2, 2),
(38, 25, 2, 2),
(39, 26, 2, 2),
(40, 27, 1, 1),
(41, 28, 1, 1),
(42, 29, 1, 1),
(43, 30, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `score` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `scores`
--

INSERT INTO `scores` (`id`, `user_id`, `user_name`, `score`, `created_at`) VALUES
(1, 26, 'emnaghorbel56', 37, '2025-12-11 23:27:11'),
(2, 27, 'bubble', 0, '2025-12-11 23:37:21'),
(3, 28, 'cat', 0, '2025-12-11 23:37:55'),
(4, 29, 'ghorbell', 0, '2025-12-12 12:24:43'),
(5, 30, 'emnaghorbel5677', 0, '2025-12-12 12:41:57');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(4, 'emna', '$2y$10$Th0KcB0Us98w30ykNY2UqeJmNbVfRF2ZO4GmCWxyUeZt9ICV2zfUe', 'emnaghorbel56@gmail.com', '2025-12-05 23:56:37'),
(15, 'emnaghorbel5677', '$2y$10$KHSYECMbnalGdSsMUdGYeukgre7Db2uCT8Yl5WoIOj5AiPmACtcES', 'emnaghorbel57777776@gmail.com', '2025-12-10 22:47:30'),
(16, 'emna.ghorbel', '$2y$10$JH6sg1CEHbPDfRQGI4heyuwhVdT9LFtviC1ma6pLThiA9Gj7XZfmm', 'emna.ghorbel@enis.tn', '2025-12-10 22:58:04'),
(17, 'emna', '$2y$10$T9gBWYcBW8PdubcrotL9kOvqR.GG3FOUVooLjea0us03832Ug7Xmm', 'emna.ghorbel@ieee.org', '2025-12-10 23:03:56'),
(18, 'emna', '$2y$10$CJC74jzFG1zL6xKzGSGB3Oi/lyJmGxxe2eYHNdBpuBPqrctX8/GdC', 'emnaghorbel65@gmail.com', '2025-12-10 23:31:13'),
(19, 'emna@enis.tn', '$2y$10$arX9GCrmLcCOToakbSxfUOUB50AxUg.UpRelGfrWlAMQ/pkhPRt4e', 'emna@enis.tn', '2025-12-11 18:43:26'),
(20, 'emna', '$2y$10$n36QgakEYV18qd/5cZ.aO.2zZcJWe9itNhPv37ddRl.wdIDmiKmu2', 'emna.ghorbel22@ieee.org', '2025-12-11 18:50:49'),
(21, 'emna12', '$2y$10$sUibY8iImGaSKwRMYbBzW.Jh.L2SN0ke5BA66H24CyHNqmY2SMpLG', 'emna.ghorbel2003@ieee.org', '2025-12-11 19:37:21'),
(22, 'emna', '$2y$10$jy8130BM22J1QAxkMLbG.uGYDGSSccAjwechvWcRvvSOwT/4OwwO.', 'emna.ghorbel200345@ieee.org', '2025-12-11 19:39:46'),
(23, 'emna.ghorbel99', '$2y$10$ZOY/4AQ8a74dfH.zCFrv6eS.6TXPHb5OUvNGsUbYlPdkmfKYzlDzG', 'emna.ghorbel99@ieee.org', '2025-12-11 20:02:36'),
(24, 'emnaghorbel56', '$2y$10$SYJtU0J1I2AWka1aW5xiu.WAVIsMJrsn/QMwS6l9EyPfiFi8CqmEu', 'emnaghorbel5611@gmail.com', '2025-12-11 20:12:25'),
(25, 'emnaghorbel', '$2y$10$lfd5ZzEiqtvNxKeMsz7CmeLccMpFFDoG2Hu5DpoKdQ3SijI.yEOEm', 'emnaghorbel5677@gmail.com', '2025-12-11 20:13:52'),
(26, 'emnaghorbel56', '$2y$10$wRxvyRu8EvL5LcssuqVsCui9gC7pnvrfdpfCovcrKz59erTySovjm', 'emna123@gmail.com', '2025-12-11 23:27:11'),
(27, 'bubble', '$2y$10$2DdCPszSdC155NVElvBpH.h3AGbZPErIkDus8U3VxwxFM0EbKDeGW', 'emna1234@gmail.com', '2025-12-11 23:37:21'),
(28, 'cat', '$2y$10$wmlIq3h0CUD6f8k.CQo08OznRcYOxxZov1qSTuCiSD.uaCP5SSHJu', 'emna12345@gmail.com', '2025-12-11 23:37:55'),
(29, 'ghorbell', '$2y$10$arjNJr/SlIq0VLOeAptHjOIX41gaXHafeTuoW64aMFas9ZQHiW0NK', 'emnaghorbel567789@gmail.com', '2025-12-12 12:24:43'),
(30, 'emnaghorbel5677', '$2y$10$iSeZMp4sD7GPsyaM/N61iecxqR9Rap0TQ8GYHIjH4J1VcM75HgEuy', 'emnaghorbel566666@gmail.com', '2025-12-12 12:41:56');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pour la table `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `levels`
--
ALTER TABLE `levels`
  ADD CONSTRAINT `levels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
