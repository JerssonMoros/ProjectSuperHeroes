CREATE DATABASE superheroes;
USE superheroes;

CREATE TABLE heroes (
    id_heroe INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_heroe VARCHAR(30) NOT NULL,
    nombre_editorial VARCHAR(20) NOT NULL,
    alter_ego VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    imagen VARCHAR(500) NOT NULL
);

INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Superman', 'DC Comics', 'Clark Kent', 'El último hijo de Krypton con poderes sobrehumanos.', 'https://images.hdqwalls.com/download/superman-2020-above-f4-2560x1440.jpg');
INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Batman', 'DC Comics', 'Bruce Wayne', 'Un millonario que se convierte en un justiciero enmascarado.', 'https://th.bing.com/th/id/R.b3356dfb1c5766b33fa4a5b3fc9291fa?rik=Hy7o1onYZ%2bAitg&pid=ImgRaw&r=0');
INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Spider-Man', 'Marvel Comics', 'Peter Parker', 'Un estudiante mordido por una araña radiactiva que le otorga poderes especiales.', 'https://th.bing.com/th/id/OIP.YDhfH81sdXx92Zr4NqwfCgHaEo?pid=ImgDet&rs=1');
INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Wonder Woman', 'DC Comics', 'Diana Prince', 'Una princesa amazona con habilidades sobrehumanas que lucha por la justicia.', 'https://th.bing.com/th/id/R.07909f241a8018bcbf6b7c03493dc571?rik=VVn5%2b3VFW09m6Q&pid=ImgRaw&r=0');
INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Iron Man', 'Marvel Comics', 'Tony Stark', 'Un genio multimillonario que construye una armadura tecnológica para combatir el crimen.', 'https://iphoneswallpapers.com/wp-content/uploads/2019/05/Tony-Stark-Snap-Infinity-Stones-iPhone-Wallpaper-469x832.jpg');
INSERT INTO heroes (nombre_heroe, nombre_editorial, alter_ego, descripcion, imagen)
VALUES ('Black Widow', 'Marvel Comics', 'Natasha Romanoff', 'Una espía y asesina altamente capacitada que lucha del lado de los héroes.', 'https://th.bing.com/th/id/OIP.l_SJbjNhVf2rQLmCYZ4nsAHaEK?pid=ImgDet&rs=1');


SELECT * FROM heroes;