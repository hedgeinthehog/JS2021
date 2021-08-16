CREATE TABLE IF NOT EXISTS students (
    `id` int primary key auto_increment,
    `name` varchar(255) NOT null,
    `surname` varchar(255) NOT null,
    `age` int NOT null,
    `gender` varchar(255) NOT null
)