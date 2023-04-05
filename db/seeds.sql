INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Interconnected"),
        ("Sales"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Engineering Manager", 120000, 1),
        ("Engineering Lead", 100000, 1),
        ("Staff Engineer", 80000, 1),
        ("Finance Manager", 85000, 2),
        ("Accountant", 70000, 2),
        ("Brand Advocate Manager", 95000, 3),
        ("Brand Advocate Sr. Analyst", 82000, 3),
        ("Brand Advocate Analyst", 70000, 3),
        ("Sales Manager", 75000, 4),
        ("Salesperson", 65000, 4),
        ("Legal Manager", 110000, 5),
        ("Lawyer", 95000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Thien", "Nguyen",  1, NULL),
        ("Nhan", "Dang",  2, 1),
        ("Eli", "Wood",  3, 1), 
        ("Howard", "Lee",  4, NULL), 
        ("Max", "Doe",  5, 4),
        ("Jaya", "Dave",  6, NULL), 
        ("Adam", "Dave",  7, 6), 
        ("Juhi", "Dave",  8, 6), 
        ("Sandy", "Dai",  9, NULL), 
        ("Jooeun", "Dai",  10, 9), 
        ("Kim", "Davalos",  11, NULL), 
        ("Lien", "Thi",  12, 11);