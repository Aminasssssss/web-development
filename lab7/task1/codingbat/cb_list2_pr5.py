def centered_average(nums):
    min_val = min(nums)
    max_val = max(nums)

    total = sum(nums)

    total = total - min_val - max_val

    return total // (len(nums) - 2)