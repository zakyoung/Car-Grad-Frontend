export class ExperimentEntry {
  constructor(user_name, experiment_time, final_distance,
              experiment_type, initial_speed,
              deceleration_of_front_car_stop_time, initial_distance) {
    this.user_name = user_name;
    this.experiment_time = experiment_time; 
    this.final_distance = final_distance;
    this.experiment_type = experiment_type; 
    this.initial_speed = initial_speed;
    this.deceleration_of_front_car_stop_time = deceleration_of_front_car_stop_time;
    this.initial_distance = initial_distance;
  }
}

