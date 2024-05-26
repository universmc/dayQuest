def calculate_pi(num_terms):
    pi = 0
    sign = 1
    for i in range(num_terms):
        term = sign / (2 * i + 1)
        pi += term
        sign *= -1
    return pi * 4

def print_pi_ascii(num_digits):
    pi_str = str(calculate_pi(num_digits))
    pi_str = pi_str.replace(".", "")
    pi_str = pi_str[:1] + "." + pi_str[1:]
    for i in range(num_digits):
        print(pi_str[i], end=" ")

print_pi_ascii(10)
