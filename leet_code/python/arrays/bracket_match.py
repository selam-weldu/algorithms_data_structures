# O(n) time | O(1) space
def bracket_match(text):
  closing_brackets = 0
  opening_brackets = 0

  for brackets in text:
    if brackets == '(':
      closing_brackets += 1
    else:
      closing_brackets -= 1
      if closing_brackets == -1:
        opening_brackets += 1
        closing_brackets = 0
  return opening_brackets + closing_brackets
