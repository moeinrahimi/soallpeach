import time
import math
import os

fn is_prime(num int) bool {
	sqrtnum := math.floor(math.sqrt(num))
	mut prime := num != 1
	for i := 2; i < int(sqrtnum+1); i++ {
		if num % i == 0 {
			prime = false
			break
		}
	}
	return prime
}


fn main(){
// mut timer_a := time.new_timer()// implicitly starts on creation

	input_file := os.args[1]
	out_put_file := os.args[2]
	mut result := []string
	lines := os.read_lines(input_file) or {
        panic('error reading file ')
    }
		// timer_a.start() // you can still start it again though if you want
    for line in lines {
			a := line.int()
			if is_prime(a){
	      result << "1"
			}else{
				result << "0"
			}
}
// timer_a.stop()
// println("a took: ${timer_a.elapsed()}")

	 mut file := os.create(out_put_file) or {
		panic( err)
	}
	file.write(result.join('\n'))
	file.close()
}
