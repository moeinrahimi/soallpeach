
import math
import os

fn is_prime(num int) bool {
	sqrtnum := math.floor(math.sqrt(num))
	mut prime := num != 1
	for i := 2; i < int(sqrtnum+1); i++ {
		if(num % i == 0){
			prime = false
			break
		}
	}
	return prime
}


fn main(){
	input_file := os.args[1]
	out_put_file := os.args[2]
	mut result := []string
	lines := os.read_lines(input_file) or {
        panic('error reading file ')
    }
    for line in lines {
			a := line.int()
			if is_prime(a){
	      result << "1"
			}else{
				result << "0"
			}
}
	 mut file := os.create(out_put_file) or {
		panic( err)
	}
	file.write(result.join('\n'))
	file.close()
}
