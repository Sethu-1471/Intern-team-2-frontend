import Karate from './Images/karate.jpg'
import Dance from './Images/dance.jpg'
import Guitar from './Images/guitar.jpg'
import Calligraphy from './Images/calligraphy.jpg'
const Courses = () => {
    return (
        <div id="courses" class="section">
			<div class="container">
				<div class="row">
					<div class="section-header text-center">
						<h2>Explore Courses</h2>
						<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
					</div>
				</div>
				<div id="courses-wrapper">
					<div class="row">
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Guitar} alt=""></img>
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">Beginner to Guitar</a>
								<div class="course-details">
									<span class="course-category">Musical</span>
									<span class="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Karate} alt=""></img>
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">Introduction to Karate </a>
								<div class="course-details">
									<span class="course-category">Defence</span>
									<span class="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Calligraphy} alt=""></img>
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">The Ultimate Calligraphy Course | From Beginner To Advanced</a>
								<div class="course-details">
									<span class="course-category">Writing</span>
									<span class="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Dance} alt=""></img>
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">The Complete Western dance Course</a>
								<div class="course-details">
									<span class="course-category">Dance</span>
									<span class="course-price course-free">Premium</span>
								</div>
							</div>
						</div>
					</div>
				<div class="row">
					<div class="center-btn">
						<a class="main-button icon-button" href="#">More Courses</a>
					</div>
				</div>
                </div>
			</div>
		</div>
    )
}

export default Courses
