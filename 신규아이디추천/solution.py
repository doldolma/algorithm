def solution(new_id):
    new_id = new_id.lower()
    new_id = "".join(char for char in new_id if char.isalnum() or char in ["-", "_", "."])

    while new_id.find("..") != -1:
        new_id = new_id.replace("..", ".")
    
    while len(new_id) >= 1 and new_id[0] == ".":
        new_id = new_id[1:]
    
    while len(new_id) >= 1 and new_id[-1] == ".":
        new_id = new_id[:-1]
    
    if not new_id:
        return "aaa"
    
    new_id = new_id[:15]
    while len(new_id) >= 1 and new_id[-1] == ".":
        new_id = new_id[:-1]
    
    while len(new_id) <= 2:
        new_id += new_id[-1]
    
    return new_id

if __name__ == "__main__":
  print(solution("...!@BaT#*..y.abcdefghijklm")) # bat.y.abcdefghi