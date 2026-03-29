n = int(input())
arr = list(map(int, input().split()))

max_score = max(arr)

runner_up = -101

for score in arr:
    if score != max_score and score > runner_up:
        runner_up = score

print(runner_up)