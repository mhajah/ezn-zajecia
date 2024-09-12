using System;
using System.Collections.Generic;

internal class Program
{

    static List<int>[] G = new List<int>[] {
            new List<int>(),
            new List<int> {2, 3},
            new List<int> {1, 3},
            new List<int> {1, 2, 4},
            new List<int> {3, 5, 6, 7},
            new List<int> {4, 6},
            new List<int> {4, 5, 8},
            new List<int> {4},
            new List<int> {6, 9, 10},
            new List<int> {8, 10},
            new List<int> {8, 9}
        };

    static bool[] visited = new bool[11];
    public static void DFS(int v)
    {
        visited[v] = true;
        Console.WriteLine(v);
        for (int i = 0; i < G[v].Count; i++)
        {
            int u = G[v][i];
            if (!visited[u])
            {
                DFS(u);
            }
        }
    }



    private static void Main(string[] args)
    {
        DFS(8);
    }
}
