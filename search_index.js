var documenterSearchIndex = {"docs":
[{"location":"#Triangle.jl-Documentation","page":"Home","title":"Triangle.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia interface to Jonathan Richard Shewchuk Triangle.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The library builds the C version and then expose methods to calculate CDTs.","category":"page"},{"location":"#Functions","page":"Home","title":"Functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"basic_triangulation_vertices(vertices::Array{Float64,2})","category":"page"},{"location":"#Triangle.basic_triangulation_vertices-Tuple{Matrix{Float64}}","page":"Home","title":"Triangle.basic_triangulation_vertices","text":"basic_triangulation_vertices(vertices::Array{Float64,2})\n\nCompute a Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn]\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex coordinates in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = Array{Float64,2}([0. 0.; 1. 0.; 0. 1.])\n3×2 Array{Float64,2}:\n 0.0  0.0\n 1.0  0.0\n 0.0  1.0\n\njulia> Triangle.basic_triangulation_vertices(points)\n1-element Array{Array{Float64,2},1}:\n [0.0 0.0; 1.0 0.0; 0.0 1.0]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"basic_triangulation(vertices::Array{Float64,2},vertices_map::Array{Int64,1})","category":"page"},{"location":"#Triangle.basic_triangulation-Tuple{Matrix{Float64}, Vector{Int64}}","page":"Home","title":"Triangle.basic_triangulation","text":"basic_triangulation(vertices::Array{Float64,2},vertices_map::Array{Int64,1})\n\nCompute a Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn]\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex identifiers in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = Array{Float64,2}([0. 0.; 1. 0.; 0. 1.])\n3×2 Array{Float64,2}:\n 0.0  0.0\n 1.0  0.0\n 0.0  1.0\n\njulia> points_map = [1, 2, 3]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> Triangle.basic_triangulation(points,points_map)\n1-element Array{Array{Int64,1},1}:\n [1, 2, 3]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"basic_triangulation_vertices(vertices::Array{Float64,2},vertices_map::Array{Int64,1})","category":"page"},{"location":"#Triangle.basic_triangulation_vertices-Tuple{Matrix{Float64}, Vector{Int64}}","page":"Home","title":"Triangle.basic_triangulation_vertices","text":"basic_triangulation_vertices(vertices::Array{Float64,2},vertices_map::Array{Int64,1})\n\nCompute a Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn]\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex coordinates in each triangle definition.\n\nExample\n\njulia> using Triangle \n\njulia> points = Array{Float64,2}([0. 0.; 1. 0.; 0. 1.])\n3×2 Array{Float64,2}:\n 0.0  0.0\n 1.0  0.0\n 0.0  1.0\n\njulia> points_map = [1, 2, 3]\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\njulia> Triangle.basic_triangulation_vertices(points,points_map)\n1-element Array{Array{Float64,2},1}:\n [0.0 0.0; 1.0 0.0; 0.0 1.0]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"constrained_triangulation(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2})","category":"page"},{"location":"#Triangle.constrained_triangulation-Tuple{Matrix{Float64}, Vector{Int64}, Matrix{Int64}}","page":"Home","title":"Triangle.constrained_triangulation","text":"constrained_triangulation(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2})\n\nCompute a Constrained Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn] and a list of edges that will be kept.\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nA list of edges (to be included in the final triangulation) is passed in edges_list in the form of [ vertex-identifier-1 vertex-identifier-2; vertex-identifier-1 vertex-identifier-3; ... ; vertex-identifier-N vertex-identifier-M ]\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex identifiers in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = [0. 0.; 0. 3.; 1. 3.; 1. 1.; 2. 1.; 2. 0.]\n6×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  3.0\n 1.0  3.0\n 1.0  1.0\n 2.0  1.0\n 2.0  0.0\n\njulia> points_map = Array{Int64,1}(collect(1:1:size(points)[1]))\n6-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 5\n 6\n\njulia> edges_list = Array{Int64,2}([1 2; 2 3; 3 4; 4 5; 5 6; 6 1])\n6×2 Array{Int64,2}:\n 1  2\n 2  3\n 3  4\n 4  5\n 5  6\n 6  1\n\njulia> Triangle.constrained_triangulation(points,points_map,edges_list)\n4-element Array{Array{Int64,1},1}:\n [1, 4, 2]\n [4, 1, 6]\n [2, 4, 3]\n [5, 4, 6]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"constrained_triangulation_vertices(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2})","category":"page"},{"location":"#Triangle.constrained_triangulation_vertices-Tuple{Matrix{Float64}, Vector{Int64}, Matrix{Int64}}","page":"Home","title":"Triangle.constrained_triangulation_vertices","text":"constrained_triangulation_vertices(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2})\n\nCompute a Constrained Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn] and a list of edges that will be kept.\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nA list of edges (to be included in the final triangulation) is passed in edges_list in the form of [ vertex-identifier-1 vertex-identifier-2; vertex-identifier-1 vertex-identifier-3; ... ; vertex-identifier-N vertex-identifier-M ]\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex coordinates in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = [0. 0.; 0. 3.; 1. 3.; 1. 1.; 2. 1.; 2. 0.]\n6×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  3.0\n 1.0  3.0\n 1.0  1.0\n 2.0  1.0\n 2.0  0.0\n\njulia> points_map = Array{Int64,1}(collect(1:1:size(points)[1]))\n6-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 5\n 6\n\njulia> edges_list = Array{Int64,2}([1 2; 2 3; 3 4; 4 5; 5 6; 6 1])\n6×2 Array{Int64,2}:\n 1  2\n 2  3\n 3  4\n 4  5\n 5  6\n 6  1\n\njulia> Triangle.constrained_triangulation_vertices(points,points_map,edges_list)\n4-element Array{Array{Float64,2},1}:\n [0.0 0.0; 1.0 1.0; 0.0 3.0]\n [1.0 1.0; 0.0 0.0; 2.0 0.0]\n [0.0 3.0; 1.0 1.0; 1.0 3.0]\n [2.0 1.0; 1.0 1.0; 2.0 0.0]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"constrained_triangulation(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2}, edges_boundary::Array{Bool,1})","category":"page"},{"location":"#Triangle.constrained_triangulation-Tuple{Matrix{Float64}, Vector{Int64}, Matrix{Int64}, Vector{Bool}}","page":"Home","title":"Triangle.constrained_triangulation","text":"constrained_triangulation(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2}, edges_boundary::Array{Bool,1})\n\nCompute a Constrained Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn] and a list of edges that will be kept. Some of those edges can be marked as the boundary of the mesh.\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nA list of edge (to be included in the final triangulation) is passed in edges_list in the form of [ vertex-identifier-1 vertex-identifier-2; vertex-identifier-1 vertex-identifier-3; ... ; vertex-identifier-N vertex-identifier-M ]\n\nA list of boundary markers passed in edges_boundary in the form of booleans that tell the triangulator if the edge is on the boundary or not (the indexing is the same of edges_list).\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex identifiers in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = [0. 0.; 0. 3.; 1. 3.; 1. 1.; 2. 1.; 2. 0.]\n6×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  3.0\n 1.0  3.0\n 1.0  1.0\n 2.0  1.0\n 2.0  0.0\n\njulia> points_map = Array{Int64,1}(collect(1:1:size(points)[1]))\n6-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 5\n 6\n\njulia> edges_list = Array{Int64,2}([1 2; 2 3; 3 4; 4 5; 5 6; 6 1])\n6×2 Array{Int64,2}:\n 1  2\n 2  3\n 3  4\n 4  5\n 5  6\n 6  1\n\njulia> edge_boundary = [false, false, true, true, false, false]\n6-element Array{Bool,1}:\n false\n false\n  true\n  true\n false\n false\n\njulia> Triangle.constrained_triangulation(points,points_map,edges_list,edge_boundary)\n4-element Array{Array{Int64,1},1}:\n [1, 4, 2]\n [4, 1, 6]\n [2, 4, 3]\n [5, 4, 6]\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"constrained_triangulation_vertices(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2}, edges_boundary::Array{Bool,1})","category":"page"},{"location":"#Triangle.constrained_triangulation_vertices-Tuple{Matrix{Float64}, Vector{Int64}, Matrix{Int64}, Vector{Bool}}","page":"Home","title":"Triangle.constrained_triangulation_vertices","text":"constrained_triangulation_vertices(vertices::Array{Float64,2}, vertices_map::Array{Int64,1}, edges_list::Array{Int64,2}, edges_boundary::Array{Bool,1})\n\nCompute a Constrained Delaunay triangulation for a list of vertices in the form of [x1 y1; x2 y2; ... ; xn yn] and a list of edges that will be kept. Some of those edges can be marked as the boundary of the mesh.\n\nA list of indexes is provided in vertices_map so that each vertex can have a custom integer identifier.\n\nA list of edge (to be included in the final triangulation) is passed in edges_list in the form of [ vertex-identifier-1 vertex-identifier-2; vertex-identifier-1 vertex-identifier-3; ... ; vertex-identifier-N vertex-identifier-M ]\n\nA list of boundary markers passed in edges_boundary in the form of booleans that tell the triangulator if the edge is on the boundary or not (the indexing is the same of edges_list).\n\nThe function will return an array of array of 3-vertices lists (triangles with the correct vertices order) using the vertex coordinates in each triangle definition.\n\nExample\n\njulia> using Triangle\n\njulia> points = [0. 0.; 0. 3.; 1. 3.; 1. 1.; 2. 1.; 2. 0.]\n6×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  3.0\n 1.0  3.0\n 1.0  1.0\n 2.0  1.0\n 2.0  0.0\n\njulia> points_map = Array{Int64,1}(collect(1:1:size(points)[1]))\n6-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 5\n 6\n\njulia> edges_list = Array{Int64,2}([1 2; 2 3; 3 4; 4 5; 5 6; 6 1])\n6×2 Array{Int64,2}:\n 1  2\n 2  3\n 3  4\n 4  5\n 5  6\n 6  1\n\njulia> edge_boundary = [false, false, true, true, false, false]\n6-element Array{Bool,1}:\n false\n false\n  true\n  true\n false\n false\n\njulia> Triangle.constrained_triangulation_vertices(points,points_map,edges_list,edge_boundary)\n4-element Array{Array{Float64,2},1}:\n [0.0 0.0; 1.0 1.0; 0.0 3.0]\n [1.0 1.0; 0.0 0.0; 2.0 0.0]\n [0.0 3.0; 1.0 1.0; 1.0 3.0]\n [2.0 1.0; 1.0 1.0; 2.0 0.0]\n\n\n\n\n\n","category":"method"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
