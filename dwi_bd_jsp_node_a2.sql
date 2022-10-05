CREATE TABLE `admin` (
  `Id_admin` int(11) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `admin` (`Id_admin`, `Usuario`, `Password`) VALUES
(15, 'Kevin', '123'),
(16, 'Ulises', '12345');

CREATE TABLE `asientos` (
  `id_Asiento` varchar(2) NOT NULL,
  `Tipo` varchar(15) DEFAULT NULL,
  `Estado` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `boletos` (
  `id_Boleto` varchar(3) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  `Precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `boletos` (`id_Boleto`, `Tipo`, `Precio`) VALUES
('1', 'Adulto', 60),
('2', 'Niño', 50),
('3', 'Tercera Edad', 45);

CREATE TABLE `contacto` (
  `Id_contacto` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Email` varchar(35) NOT NULL,
  `Tema` varchar(20) NOT NULL,
  `Mensaje` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `contacto` (`Id_contacto`, `Nombre`, `Email`, `Tema`, `Mensaje`) VALUES
(3, 'Axel Joan Magaña', 'axel@gmail.com', 'Peliculas', '¿Cuando habrán nuevos estrenos?');

CREATE TABLE `peliculas` (
  `id_Pelicula` int(11) NOT NULL,
  `Nombre` varchar(35) NOT NULL,
  `Clasificacion` varchar(20) NOT NULL,
  `Genero` varchar(20) NOT NULL,
  `Estado` varchar(15) NOT NULL,
  `Imagen` varchar(35) NOT NULL,
  `Horario` varchar(15) DEFAULT NULL,
  `Url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `peliculas` (`id_Pelicula`, `Nombre`, `Clasificacion`, `Genero`, `Estado`, `Imagen`, `Horario`, `Url`) VALUES
(1, 'Tren Bala', 'Adultos', 'Accion', 'Estreno', 'img/tren_bala_2.jpg', 'Vespertino', 'https://www.youtube.com/embed/d8_2PFNMWbk'),
(2, 'DC Liga de Súpermascotas', 'Niños', 'Caricatura', 'Estreno', 'img/supermascotas.jpg', 'Matutino', 'https://nupload.co/watch/PIgwZLO7lYGzZrU0F3jz3ntA7mi5I3jz33jz33nBTf8WiL3jz3b4giU?h='),
(3, 'El Ascensor del Diablo', 'Adultos', 'Terror', 'Estreno', 'img/el_ascensor.jpg', 'Vespertino', 'https://www.youtube.com/embed/epDmDYD4hh4'),
(4, 'Dragon Ball SUPER: Superhéroe ', 'Familiar', 'Ánime', 'Estreno', 'img/super_hero.jpg', 'Matutino', 'https://nupload.co/watch/tYm5AOlTnN844h37cbA8QpcegVkExuqqj96hJN4rNtg?h='),
(5, 'Bestia', 'Adultos', 'Suspenso', 'Estreno', 'img/bestia.jpg', 'Vespertino', 'https://nupload.co/watch/D7iNhgL1l38PZMr0F8YDQxgayoavsgF2kPW01KUcE?h='),
(6, 'Top Gun', 'Adultos', 'Acción', 'Estreno', 'img/top_gun.jpg', 'Matutino', 'https://nupload.co/watch/4IHSiqWZfu2Ybuw2CwdCUaHwXjQVI0dYTZjVt8nbWgU?h='),
(7, 'Teléfono Negro', 'Adultos', 'Suspenso', 'Estreno', 'img/telefono_negro.jpg', 'Vespertino', 'https://nupload.co/watch/VhoEbIHO4uvTQ0EXRYaDooxMwTEV3jz3jHMwwjyGAokQ?h='),
(8, 'La Ciudad Perdida ', 'Familiar', 'Romance/Aventura', 'Estreno', 'img/ciudad_perdida.jpg', 'Matutino', 'https://nupload.co/watch/pmzy8Lfl9wT3jz3lZf9ArBTIGyJ3eEzoI5hA1O6hxNg7i4?h=');

CREATE TABLE `reservaciones` (
  `id_reservacion` int(3) NOT NULL,
  `MontoPago` int(11) DEFAULT NULL,
  `MetodoPago` varchar(15) DEFAULT NULL,
  `id_Horario` varchar(4) DEFAULT NULL,
  `id_Pelicula` varchar(4) DEFAULT NULL,
  `id_Boleto` varchar(3) DEFAULT NULL,
  `id_Asiento` varchar(2) DEFAULT NULL,
  `ClaveCliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usuarios` (
  `Id_usuario` int(11) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuarios` (`Id_usuario`, `Usuario`, `Password`) VALUES
(1, 'Kevin', '123');

ALTER TABLE `admin`
  ADD PRIMARY KEY (`Id_admin`);

ALTER TABLE `asientos`
  ADD PRIMARY KEY (`id_Asiento`);

ALTER TABLE `boletos`
  ADD PRIMARY KEY (`id_Boleto`);

ALTER TABLE `contacto`
  ADD PRIMARY KEY (`Id_contacto`);

ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id_Pelicula`);

ALTER TABLE `reservaciones`
  ADD PRIMARY KEY (`id_reservacion`),
  ADD KEY `fk_reservaciones_horarios` (`id_Horario`),
  ADD KEY `fk_reservaciones_peliculas` (`id_Pelicula`),
  ADD KEY `fk_reservaciones_boletos` (`id_Boleto`),
  ADD KEY `fk_reservaciones_asientos` (`id_Asiento`),
  ADD KEY `fk_reservaciones_clientes` (`ClaveCliente`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`);

ALTER TABLE `admin`
  MODIFY `Id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

ALTER TABLE `contacto`
  MODIFY `Id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `peliculas`
  MODIFY `id_Pelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `reservaciones`
  MODIFY `id_reservacion` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `reservaciones`
  ADD CONSTRAINT `fk_reservaciones_asientos` FOREIGN KEY (`id_Asiento`) REFERENCES `asientos` (`id_Asiento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservaciones_boletos` FOREIGN KEY (`id_Boleto`) REFERENCES `boletos` (`id_Boleto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservaciones_clientes` FOREIGN KEY (`ClaveCliente`) REFERENCES `admin` (`Id_admin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservaciones_peliculas` FOREIGN KEY (`id_Pelicula`) REFERENCES `peliculas` (`id_Pelicula`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;