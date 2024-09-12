using System;

class Program
{
    static void Main()
    {
        // vertices -> wierzchołki
        int vertices = 5;

        // Deklaracja macierzy sąsiedztwa
        int[,] adjacencyMatrix = new int[vertices, vertices];

        adjacencyMatrix[0, 1] = 1;
        adjacencyMatrix[1, 0] = 1;

        adjacencyMatrix[1, 2] = 1;
        adjacencyMatrix[2, 1] = 1;

        adjacencyMatrix[2, 3] = 1;
        adjacencyMatrix[3, 2] = 1;

        adjacencyMatrix[3, 4] = 1;
        adjacencyMatrix[4, 3] = 1;

        adjacencyMatrix[4, 0] = 1;
        adjacencyMatrix[0, 4] = 1;

        // Wyświetlenie macierzy sąsiedztwa
        for (int i = 0; i < vertices; i++)
        {
            for (int j = 0; j < vertices; j++)
            {
                Console.Write(adjacencyMatrix[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
}