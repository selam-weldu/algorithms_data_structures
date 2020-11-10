    def merge(self, nums1, m, nums2, n):
        merge_idx = m + n - 1
        n -= 1
        m -= 1
        while n >= 0:
            if m >=0: 
                m_num = nums1[m]
            else:
                m_num = float("-inf")
                
            n_num = nums2[n]
            
            if m_num >= n_num:
                nums1[merge_idx] = m_num
                m -= 1
            else:
                nums1[merge_idx] = n_num
                n -= 1
            merge_idx -= 1
        return nums1