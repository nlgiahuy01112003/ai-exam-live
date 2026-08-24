const quizData = [
    {
        type: "mcq",
        category: "Toán & Thống kê",
        question: "Một xét nghiệm AI phát hiện bệnh hiểm nghèo có độ chính xác $P(+|\\text{Bệnh})=0.98$ và tỷ lệ dương tính giả $P(+|\\text{Không bệnh})=0.02$. Biết tỷ lệ mắc bệnh trong cộng đồng là $1\\%$. Khi một người có kết quả xét nghiệm Dương tính, xác suất thực sự mắc bệnh $P(\\text{Bệnh}|+)$ là bao nhiêu?",
        options: ["$98.00\\%$", "$50.00\\%$", "$33.11\\%$", "$2.00\\%$"],
        correct: 2,
        explanation: "Áp dụng định lý Bayes:<br><br> $$P(\\text{Bệnh}|+) = \\frac{P(+|\\text{Bệnh})P(\\text{Bệnh})}{P(+|\\text{Bệnh})P(\\text{Bệnh}) + P(+|\\text{Không bệnh})P(\\text{Không bệnh})}$$ <br><br> $$\\Rightarrow \\frac{0.98 \\times 0.01}{(0.98 \\times 0.01) + (0.02 \\times 0.99)} = \\frac{0.0098}{0.0296} \\approx 33.11\\%$$"
    },
    {
        type: "mcq",
        category: "Đại số tuyến tính",
        question: "Cho 3 ma trận $A \\in \\mathbb{R}^{4 \\times 5}$, $B \\in \\mathbb{R}^{5 \\times 3}$, và $C \\in \\mathbb{R}^{3 \\times 4}$. Phép nhân ma trận $X = (A \\cdot B) \\cdot C$ sẽ trả về ma trận $X$ có kích thước (shape) là bao nhiêu?",
        options: ["$(4, 4)$", "$(5, 5)$", "$(4, 3)$", "Không thực hiện được"],
        correct: 0,
        explanation: "Khi nhân 2 ma trận, số cột của ma trận trước phải bằng số hàng của ma trận sau:<br>1. $A_{4 \\times 5} \\cdot B_{5 \\times 3}$ tạo ra ma trận mới $AB_{4 \\times 3}$.<br>2. Tiếp tục lấy $AB_{4 \\times 3} \\cdot C_{3 \\times 4}$ sẽ tạo ra ma trận $X_{4 \\times 4}$."
    },
    {
        type: "mcq",
        category: "Đại số tuyến tính",
        question: "Khái niệm <b>Vector riêng</b> (Eigenvector) trong Đại số tuyến tính có ý nghĩa cốt lõi gì khi ứng dụng vào thuật toán giảm chiều dữ liệu PCA (Principal Component Analysis)?",
        options: [
            "Là các vector làm tăng số chiều của dữ liệu lên không gian cao hơn.",
            "Là các hướng (trục) trong không gian dữ liệu mà tại đó phương sai (variance) phân tán lớn nhất.",
            "Là các vector bị biến dạng nhiều nhất khi đi qua một ma trận biến đổi.",
            "Là trọng số chệch (bias) $\\beta_0$ trong hàm mất mát."
        ],
        correct: 1,
        explanation: "Eigenvectors (Vector riêng) của ma trận hiệp phương sai xác định các trục tọa độ mới (Principal Components) sao cho phương sai (Variance) của dữ liệu trên các trục đó là cực đại, giúp giữ lại lượng thông tin lớn nhất khi giảm số chiều $D \\rightarrow K$."
    },
    {
        type: "mcq",
        category: "Giải tích & Tối ưu",
        question: "Đạo hàm bậc nhất của hàm kích hoạt Sigmoid $\\sigma(x) = \\frac{1}{1 + e^{-x}}$ được biểu diễn theo chính hàm $\\sigma(x)$ bằng công thức nào dưới đây?",
        options: [
            "$\\sigma(x)\\big(1 - \\sigma(x)\\big)$",
            "$\\sigma(x)^2$",
            "$1 - \\sigma(x)$",
            "$\\sigma(x)\\big(1 + \\sigma(x)\\big)$"
        ],
        correct: 0,
        explanation: "Sử dụng quy tắc đạo hàm thương số, ta có thể chứng minh được $\\frac{d}{dx}\\sigma(x) = \\sigma(x)\\big(1 - \\sigma(x)\\big)$. Nhờ đặc tính này, quá trình Backpropagation tính toán Gradient cực kỳ tối ưu vì chỉ cần tận dụng lại kết quả Feed-forward."
    },
    {
        type: "mcq",
        category: "Lập trình Python",
        question: "Đoạn code Python sau in ra kết quả gì?<br><pre><code class=\"language-python\">def add_item(item, box=[]):\n    box.append(item)\n    return box\n\nprint(add_item(1))\nprint(add_item(2))</code></pre>",
        options: [
            "<code>[1]</code> và <code>[2]</code>",
            "<code>[1]</code> và <code>[1, 2]</code>",
            "<code>[1, 2]</code> và <code>[1, 2]</code>",
            "Báo lỗi <code>TypeError</code>"
        ],
        correct: 1,
        explanation: "Trong Python, <b>Default arguments</b> dạng mutable object (như `list`, `dict`) chỉ được khởi tạo và cấp phát bộ nhớ đúng 1 lần khi hàm được định nghĩa.<br>Lần 1: `box` khởi tạo thành `[1]`.<br>Lần 2: Nó dùng lại vùng nhớ của list cũ, nối thêm `2` tạo thành `[1, 2]`."
    },
    {
        type: "mcq",
        category: "Thư viện NumPy",
        question: "Đoạn code NumPy sau trả về kết quả gì?<br><pre><code class=\"language-python\">import numpy as np\nx = np.arange(6).reshape(2, 3)\ny = np.argmax(x, axis=1)\nprint(y)</code></pre>",
        options: [
            "<code>[5]</code>",
            "<code>[2, 5]</code>",
            "<code>[2, 2]</code>",
            "<code>[0, 1]</code>"
        ],
        correct: 2,
        explanation: "`x` tạo ra mảng 2D: `[[0, 1, 2], [3, 4, 5]]`.<br>`np.argmax(x, axis=1)` tìm kiếm theo chiều ngang (trục cột) phần tử lớn nhất.<br>Hàng 1 max là `2` nằm ở index `2`. Hàng 2 max là `5` cũng ở index `2`. Trả về `[2, 2]`."
    },
    {
        type: "mcq",
        category: "Thư viện Pandas",
        question: "Cho DataFrame <code>df = pd.DataFrame({'Value': [10, 20, 30, 40]}, index=[2, 3, 0, 1])</code>.<br>Lệnh truy xuất <code>df.loc[0]</code> và <code>df.iloc[0]</code> lần lượt trả về giá trị nào?",
        options: [
            "10 và 10",
            "30 và 10",
            "10 và 30",
            "Báo lỗi KeyError"
        ],
        correct: 1,
        explanation: "<code>loc[]</code> tìm dòng bằng <b>Tên nhãn (Label)</b>. Trong <code>index=[2, 3, 0, 1]</code>, nhãn <code>0</code> nằm ở dòng thứ 3 $\\rightarrow$ Giá trị <code>30</code>.<br><code>iloc[]</code> tìm dòng bằng <b>Vị trí vật lý (Position)</b>. Dòng vật lý đầu tiên (index 0) $\\rightarrow$ Giá trị <code>10</code>."
    },
    {
        type: "mcq",
        category: "Machine Learning",
        question: "Trong bài toán phát hiện giao dịch gian lận thẻ tín dụng (Fraud Detection), ngân hàng quy định: <i>\"Thà báo động nhầm một giao dịch hợp lệ còn hơn bỏ sót giao dịch lừa đảo\"</i>. Mô hình phân loại cần ưu tiên tối ưu hóa metric nào?",
        options: [
            "Accuracy (Độ chính xác tổng thể)",
            "Precision (Độ chuẩn xác)",
            "Recall / Sensitivity (Độ phủ)",
            "Specificity (Độ đặc hiệu)"
        ],
        correct: 2,
        explanation: "$$\\text{Recall} = \\frac{TP}{TP + FN}$$ Bỏ sót lừa đảo nghĩa là `FN` (False Negative) tăng. Để giảm thiểu rủi ro bỏ sót, ta phải cố gắng làm `FN` nhỏ nhất có thể, tức là kéo <b>Recall</b> lên gần 1."
    },
    {
        type: "mcq",
        category: "Deep Learning",
        question: "Trong quá trình huấn luyện bằng thuật toán Gradient Descent, bạn quan sát thấy đường cong Loss ban đầu giảm, nhưng sau đó dao động rất mạnh (oscillate) lên xuống hình răng cưa và không thể hội tụ. Nguyên nhân cốt lõi phổ biến nhất là gì?",
        options: [
            "Learning Rate (Tốc độ học) $\\alpha$ quá nhỏ.",
            "Learning Rate (Tốc độ học) $\\alpha$ quá lớn.",
            "Số lượng Epoch quá ngắn.",
            "Kích thước Batch size quá lớn."
        ],
        correct: 1,
        explanation: "Khi Learning Rate $\\alpha$ quá lớn, bước cập nhật trọng số sẽ vượt lố (overshoot) qua điểm cực tiểu toàn cục của hàm mất mát, văng qua lại hai bên sườn thung lũng tạo ra dao động mạnh, thậm chí vọt lên $\\text{NaN}$ (Exploding Gradient)."
    },
    {
        type: "mcq",
        category: "MLOps & Data Pipeline",
        question: "Hành động nào sau đây gây ra hiện tượng <b>Rò rỉ dữ liệu</b> (Data Leakage) khi xây dựng mô hình dự đoán khả năng khách hàng vỡ nợ thẻ tín dụng?",
        options: [
            "Xóa các bản ghi có chứa Missing Values ở bước tiền xử lý.",
            "Chia dữ liệu Train/Test theo tỷ lệ $80\\% / 20\\%$.",
            "Đưa biến <i>\"Số tiền bị phạt do trả chậm trong tháng cần dự đoán\"</i> vào làm Feature huấn luyện.",
            "Áp dụng One-Hot Encoding cho cột Giới tính."
        ],
        correct: 2,
        explanation: "Data Leakage xảy ra khi mô hình được huấn luyện bằng các <b>thông tin đến từ tương lai</b> (những thông tin mà ở thời điểm thực tế cần đưa ra dự đoán, hệ thống không thể biết được). Tiền phạt trả chậm của tháng dự đoán là dữ liệu tương lai."
    },
    {
        type: "mcq",
        category: "Thuật toán Machine Learning",
        question: "Trong các thuật toán sau, thuật toán nào dễ bị ảnh hưởng tiêu cực nhất (nhạy cảm nhất) nếu bộ dữ liệu chứa nhiều <b>Outliers</b> (điểm ngoại lai) mà chưa được xử lý chuẩn hóa?",
        options: [
            "Random Forest",
            "K-Means Clustering",
            "Decision Tree",
            "Naive Bayes"
        ],
        correct: 1,
        explanation: "K-Means sử dụng <b>trung bình cộng (Mean)</b> và <b>khoảng cách Euclidean</b> để cập nhật tâm cụm. Vì Mean rất nhạy cảm với Outliers (bị kéo lệch nghiêm trọng), K-Means sẽ cho kết quả gom cụm rất sai lệch nếu không loại bỏ ngoại lai."
    },
    {
        type: "mcq",
        category: "Đạo đức AI & Dữ liệu",
        question: "Mô hình AI lọc CV tuyển dụng tự động của công ty thường xuyên chấm điểm thấp cho các ứng viên nữ ở vị trí Kỹ sư Phần mềm. Kiểm tra dữ liệu lịch sử cho thấy $90\\%$ dữ liệu trúng tuyển 5 năm qua là nam giới. Phương án nào giải quyết tận gốc vấn đề thiên vị (Bias) này?",
        options: [
            "Giữ nguyên mô hình vì nó phản ánh chính xác dữ liệu lịch sử.",
            "Tái cân bằng dữ liệu (Oversampling hồ sơ nữ đạt chuẩn) và loại bỏ thuộc tính <code>Gender</code> khỏi tập Feature.",
            "Nhân đôi điểm số đầu ra cho tất cả ứng viên nữ.",
            "Xóa bỏ toàn bộ dữ liệu ứng viên nam trong tập huấn luyện."
        ],
        correct: 1,
        explanation: "Mô hình bị thiên vị (Bias) do dữ liệu lịch sử bị mất cân bằng (Historical Bias). Cách xử lý chuẩn mực là thu thập/tái cân bằng dữ liệu đầu vào (Data-Centric AI) và loại bỏ biến giới tính để tránh việc mô hình dùng thông tin này làm tiêu chí ra quyết định ngầm."
    },
    {
        type: "essay",
        category: "Lập trình Pandas (Code chay)",
        question: "Cho DataFrame <code>df</code> gồm 3 cột <code>['Region', 'Product', 'Sales']</code>.<br>Viết 1 dòng code duy nhất tạo một bảng Pivot tổng kết sao cho: mỗi hàng (index) là một <code>Region</code>, mỗi cột (columns) là một <code>Product</code>, giá trị bên trong là tổng <code>sum</code> của <code>Sales</code>. Các ô trống điền giá trị <code>0</code>.",
        options: [],
        correct: -1,
        explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">df.pivot_table(index='Region', columns='Product', values='Sales', aggfunc='sum', fill_value=0)</code></pre>"
    },
    {
        type: "essay",
        category: "Lập trình Pandas (Code chay)",
        question: "Cho DataFrame <code>df</code> có cột <code>['Name', 'Salary', 'Department']</code>.<br>Viết 1 dòng code duy nhất dùng phương thức <code>.transform()</code> hoặc hàm tương đương để điền các giá trị <code>NaN</code> (khuyết thiếu) trong cột <code>Salary</code> bằng giá trị Trung vị (Median) tính theo từng phòng ban <code>Department</code>.",
        options: [],
        correct: -1,
        explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">df['Salary'] = df.groupby('Department')['Salary'].transform(lambda x: x.fillna(x.median()))</code></pre><br><i>Lý do dùng transform: Nó giúp tính toán theo GroupBy nhưng vẫn trả về cấu trúc Series có độ dài (shape) y hệt mảng ban đầu để gán đè trực tiếp.</i>"
    },
    {
        type: "essay",
        category: "Tối ưu Thuật toán (Tự luận)",
        question: "Dữ liệu y tế phân tích gen có số lượng đặc trưng (Features) $D = 10,000$ nhưng số lượng quan sát (Samples) chỉ có $N = 500$ bệnh nhân.<br>Nếu sử dụng Linear Regression trực tiếp, mô hình sẽ gặp hiện tượng gì?<br>Bắt buộc dùng Regularization, bạn sẽ ưu tiên chọn phương pháp <b>$L_1$ (Lasso)</b> hay <b>$L_2$ (Ridge)</b> để tìm ra chính xác những gen gây bệnh? Vì sao?",
        options: [],
        correct: -1,
        explanation: "- <b>Hiện tượng:</b> Mô hình sẽ bị Overfitting nghiêm trọng (Lời nguyền số chiều) do $D > N$, ma trận tính toán không có ma trận nghịch đảo duy nhất.<br>- <b>Lựa chọn:</b> Bắt buộc phải dùng <b>$L_1$ Regularization (Lasso)</b>. <br>- <b>Giải thích toán học:</b> Quỹ đạo tối ưu của $L_1$ có dạng hình thoi với các góc nhọn trên hệ tọa độ, giúp triệt tiêu hoàn toàn các hệ số trọng số $w_i$ không quan trọng về đúng $0$. Từ đó nó tự động thực hiện Feature Selection, chỉ giữ lại số ít các gen thực sự gây bệnh thay vì làm nhiễu dữ liệu như $L_2$."
    }
];
