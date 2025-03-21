type Graph = Record<string, Record<string, number>>;
type Distance = Record<string, number>

function dijkstra(graph: Graph, start: string): Distance {
  const distances: Distance = {};
  const visited = new Set<string>();

  // Inicjalizacja
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let current = null;

    for (const node in graph) {
      if (!visited.has(node) && (current === null || distances[node] < distances[current])) {
        current = node;
      }
    }

    if (!current) break;

    for (const neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }

    visited.add(current);
    
  }

  return distances;

} 

const graph: Graph = {
  A: { Dom: 2 }, 
  Dom: { A: 2, B: 3, D: 5},
  B: { Dom: 3, C: 5},
  C: { D: 3, G: 4},
  D: { C: 3, Dom: 5, E: 4, F: 6 },
  E: { D: 4, Szkola: 3 },
  F: { Szkola: 2, D: 6 },
  G: { C: 4, Szkola: 3 },
  Szkola: { E: 3, F: 2, G: 3 }
};

const result = dijkstra(graph, "Dom");
console.log("Najkrótsze odległości od 'Dom':");
console.log(result);