/*
71. Simplify Path

Given an absolute path for a Unix-style file system, which begins with a slash '/', 
transform this path into its simplified canonical path.

In Unix-style file system context, a single period '.' signifies the current directory, 
a double period ".." denotes moving up one directory level, and multiple slashes such as 
"//" are interpreted as a single slash. In this problem, 
treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories.

The simplified canonical path should adhere to the following rules:

    It must start with a single slash '/'.
    Directories within the path should be separated by only one slash '/'.
    It should not end with a slash '/', unless it's the root directory.
    It should exclude any single or double periods used to denote current or parent directories.

Return the new path.

 

Example 1:

Input: path = "/home/"
Output: "/home"
Explanation:
The trailing slash should be removed.
 

Example 2:

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation:
Multiple consecutive slashes are replaced by a single one.

Example 3:
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation:
A double period ".." refers to the directory up a level.

Example 4:

Input: path = "/../"
Output: "/"
Explanation:
Going one level up from the root directory is not possible.

Example 5:

Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation:
"..." is a valid name for a directory in this problem.


Ваша задача - преобразовать абсолютный путь для файловой системы в стиле Unix в его упрощенный канонический путь.

В контексте файловой системы в стиле Unix одиночная точка '.' обозначает текущий каталог, двойная точка ".." обозначает переход на один уровень вверх,
а несколько слэшей, таких как "//", интерпретируются как один слэш. 
В этой задаче рассматривайте последовательности точек, которые не покрываются предыдущими правилами (например, "..."), 
как допустимые имена для файлов или каталогов.

Упрощенный канонический путь должен соответствовать следующим правилам:

    Он должен начинаться с одного слэша '/'.
    Каталоги в пути должны быть разделены только одним слэшем '/'.
    Он не должен заканчиваться слэшем '/', если это не корневой каталог.
    Он должен исключать любые одиночные или двойные точки, используемые для обозначения текущих или родительских каталогов.

Верните новый путь.

Your task is to transform an absolute path for a Unix-style file system into its simplified canonical path.

In a Unix-style file system context, a single period '.' signifies the current directory, 
a double period ".." denotes moving up one directory level, 
and multiple slashes such as "//" are interpreted as a single slash. 
In this problem, treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories.

The simplified canonical path should adhere to the following rules:

    It must start with a single slash '/'.
    Directories within the path should be separated by only one slash '/'.
    It should not end with a slash '/', unless it's the root directory.
    It should exclude any single or double periods used to denote current or parent directories.

Return the new path.

*/

function simplifyPath(path) {
  // Разделяем путь на части по слэшу
  // Split the path into parts by slash
  let parts = path.split('/');

  // Инициализируем стек для хранения частей пути
  // Initialize a stack to store the parts of the path
  let stack = [];

  // Проходим по каждой части пути
  // Go through each part of the path
  for (let part of parts) {
    // Если часть пути является двойной точкой, удаляем последнюю часть пути из стека
    // If the part of the path is a double dot, remove the last part of the path from the stack
    if (part === '..') {
      stack.pop();
    }
    // Если часть пути не является пустой строкой или одиночной точкой, добавляем ее в стек
    // If the part of the path is not an empty string or a single dot, push it into the stack
    else if (part !== '' && part !== '.') {
      stack.push(part);
    }
  }

  // Возвращаем новый путь, объединяя части пути из стека с помощью слэша
  // Return the new path by joining the parts of the path from the stack with a slash
  return '/' + stack.join('/');
}
