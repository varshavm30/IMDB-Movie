var cl = console.log;
//alert('hello');
"use strict";

const imgUrl = 'https://image.tmdb.org/t/p/w1280'

cl(movieArr);

let movies = document.getElementById('movieContainer');
cl(movies);

let result = " ";
movieArr.forEach(function(movievalue){
	
	result += `<div class="col-md-3">
				<div class="card mb-4">
					<figure class="movieCard">
						<img src=${imgUrl}${movievalue.poster_path} alt="${movievalue.title}" title="${movievalue.title}">
						<figcaption class="text-white p-4 bg-dark">
							<div class="row">
								<div class="col-md-8">
									<h3 class="heading">
										${movievalue.title}
									</h3>
								</div>
								<div class="col-md-4">
									<span class="rating">
									 ${movievalue.vote_average}
									</span>
									<span class="video">
									 ${movievalue.video}
									</span>
									<span class="vote_count">
									 ${movievalue.vote_count}
									</span>
									<span class="id">
									 ${movievalue.id}
									</span>
								</div>
							</div>
							<div class="overview bg-white p-4 text-dark">
								<h4><strong>Overview:</strong></h4>
							 	<p class="text-justify"><em><strong>${movievalue.overview}</strong></em></p>
							</div>
						</figcaption>
					</figure>
				</div>
	</div>`
	
});

cl(result);

movies.innerHTML = result;