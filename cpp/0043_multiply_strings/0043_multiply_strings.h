/* Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.
 */

#include <algorithm>
#include <math.h>
#include <string>
#include <vector>

using std::string;

class Solution {
public:
  string multiply(string num1, string num2) {
    if (num1.length() < num2.length()) {
      std::swap(num1, num2);
    }

    std::vector<int> result(num1.length() + num2.length(), 0);
    int carry = 0;
    int flag = 0;

    for (int i = num2.length() - 1; i >= 0; i--) {
      for (int j = num1.length() - 1; j >= 0; j--) {
        const int result_index = num1.length() - 1 - j + flag;
        const int a = num1[j] - '0';
        const int b = num2[i] - '0';
        const int current = a * b + carry + result[result_index];
        carry = floor(current / 10);
        result[result_index] = current % 10;
        if (j == 0 && carry > 0) {
          result[num1.length() + flag] += carry;
          carry = 0;
        }
      }
      flag++;
    }

    while (result.size() > 1) {
      if (result.back() > 0) {
        break;
      }

      result.pop_back();
    }

    std::reverse(result.begin(), result.end());

    string string_result = "";

    for (const int &letter : result) {
      string_result += std::to_string(letter);
    }

    return string_result;
  }
};
