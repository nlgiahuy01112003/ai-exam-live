const quizData = [
    // --- TOÁN HỌC & THỐNG KÊ ---
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
        category: "Toán & Thống kê",
        question: "Trong kiểm định giả thuyết thống kê, giá trị <b>P-value</b> cho biết điều gì?",
        options: [
            "Xác suất giả thuyết $H_0$ (Null Hypothesis) là đúng.",
            "Xác suất quan sát được một kết quả cực đoan ít nhất như mẫu hiện tại, với giả định $H_0$ là đúng.",
            "Độ chính xác của mô hình dự đoán Machine Learning.",
            "Tỷ lệ sai sót của hệ thống khi đưa ra quyết định."
        ],
        correct: 1,
        explanation: "P-value không phải là xác suất $H_0$ đúng. Nó là xác suất có điều kiện: $P(\\text{Data} | H_0)$. Nếu P-value rất nhỏ (ví dụ $< 0.05$), ta có cơ sở thống kê mạnh mẽ để bác bỏ giả thuyết $H_0$."
    },
    {
        type: "mcq",
        category: "Toán & Thống kê",
        question: "Một bài thi có điểm phân phối chuẩn với trung bình $\\mu=70$ và độ lệch chuẩn $\\sigma=5$. Một thí sinh đạt $85$ điểm. Z-Score của thí sinh này là bao nhiêu và có được xem là Outlier (theo quy tắc 3-sigma) không?",
        options: [
            "$Z=3.0$, Là Outlier.",
            "$Z=3.0$, Không phải Outlier.",
            "$Z=15.0$, Là Outlier.",
            "$Z=1.5$, Không phải Outlier."
        ],
        correct: 0,
        explanation: "Công thức Z-Score: $$Z = \\frac{x - \\mu}{\\sigma} = \\frac{85 - 70}{5} = 3.0$$ Theo quy tắc thực nghiệm (Empirical Rule), các điểm có $|Z| \\ge 3$ thường được phân loại là dữ liệu ngoại lai (Outlier) vì xác suất xảy ra chỉ khoảng $0.3\\%$."
    },
    {
        type: "mcq",
        category: "Toán & Thống kê",
        question: "Dữ liệu thu nhập của $10,000$ người dân bị lệch phải mạnh (Right-skewed) do có một vài tỷ phú siêu giàu. Chỉ số đo lường khuynh hướng tập trung nào phản ánh chính xác nhất mức thu nhập của đại đa số người dân?",
        options: ["Mean (Trung bình cộng)", "Median (Trung vị)", "Mode (Yếu vị)", "Variance (Phương sai)"],
        correct: 1,
        explanation: "Khi dữ liệu bị lệch mạnh (Skewed) do Outliers, <b>Mean</b> sẽ bị kéo lệch rất lớn. <b>Median</b> (Trung vị - điểm chia đôi tập dữ liệu) ổn định hơn và đại diện tốt hơn cho mức thu nhập điển hình của số đông."
    },

    // --- ĐẠI SỐ TUYẾN TÍNH & GIẢI TÍCH ---
    {
        type: "mcq",
        category: "Đại số tuyến tính",
        question: "Cho 3 ma trận $A \\in \\mathbb{R}^{4 \\times 5}$, $B \\in \\mathbb{R}^{5 \\times 3}$, và $C \\in \\mathbb{R}^{3 \\times 4}$. Phép nhân ma trận $X = (A \\cdot B) \\cdot C$ sẽ trả về ma trận $X$ có kích thước (shape) là bao nhiêu?",
        options: ["$(4, 4)$", "$(5, 5)$", "$(4, 3)$", "Không thực hiện được"],
        correct: 0,
        explanation: "Khi nhân 2 ma trận, số cột của ma trận trước phải bằng số hàng của ma trận sau:<br>1. $A_{4 \\times 5} \\cdot B_{5 \\times 3} \\rightarrow AB_{4 \\times 3}$.<br>2. Tiếp tục lấy $AB_{4 \\times 3} \\cdot C_{3 \\times 4} \\rightarrow X_{4 \\times 4}$."
    },
    {
        type: "mcq",
        category: "Đại số tuyến tính",
        question: "Khái niệm <b>Vector riêng</b> (Eigenvector) có ý nghĩa cốt lõi gì khi ứng dụng vào thuật toán giảm chiều dữ liệu PCA (Principal Component Analysis)?",
        options: [
            "Làm tăng số chiều của dữ liệu lên không gian cao hơn.",
            "Là các hướng (trục) trong không gian mà tại đó phương sai (variance) của dữ liệu phân tán lớn nhất.",
            "Là các vector bị biến dạng nhiều nhất khi đi qua một ma trận biến đổi.",
            "Là ma trận trọng số chệch (bias) $\\beta_0$."
        ],
        correct: 1,
        explanation: "Eigenvectors của ma trận hiệp phương sai (Covariance Matrix) xác định các trục tọa độ mới (Principal Components) sao cho phương sai của dữ liệu trên các trục đó là cực đại, giúp giữ lại lượng thông tin lớn nhất khi giảm số chiều $D \\rightarrow K$."
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
        explanation: "Sử dụng quy tắc đạo hàm thương số, ta có thể chứng minh $\\frac{d}{dx}\\sigma(x) = \\sigma(x)\\big(1 - \\sigma(x)\\big)$. Nhờ đặc tính này, Backpropagation tính toán Gradient cực kỳ tối ưu vì chỉ cần dùng lại kết quả feed-forward."
    },

    // --- PYTHON, NUMPY & PANDAS ---
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
        explanation: "<b>Default arguments</b> dạng mutable object (như `list`) chỉ được khởi tạo và cấp phát bộ nhớ đúng 1 lần khi hàm được định nghĩa.<br>Lần 1: `box` khởi tạo thành `[1]`.<br>Lần 2: Nó dùng lại vùng nhớ của list cũ, nối thêm `2` tạo thành `[1, 2]`."
    },
    {
        type: "mcq",
        category: "Lập trình Python",
        question: "Sự khác biệt cốt lõi về mặt hiệu suất giữa List Comprehension <code>[x**2 for x in range(1000)]</code> và Generator Expression <code>(x**2 for x in range(1000))</code> là gì?",
        options: [
            "List nhanh hơn Generator gấp 10 lần do có sẵn trong RAM.",
            "Generator không lưu toàn bộ mảng vào RAM mà sinh ra từng giá trị khi được gọi (Lazy Evaluation), giúp tiết kiệm cực nhiều Memory.",
            "Không có sự khác biệt về Memory, chỉ khác nhau về cú pháp.",
            "Generator sinh ra Tuple thay vì List."
        ],
        correct: 1,
        explanation: "Generator sử dụng cơ chế Lazy Evaluation (Yield), chỉ giữ trạng thái hiện tại thay vì cấp phát mảng khổng lồ trong RAM. Phù hợp xử lý tập dữ liệu Big Data không nhét vừa RAM."
    },
    {
        type: "mcq",
        category: "Thư viện NumPy",
        question: "Đoạn code NumPy sau trả về kết quả gì?<br><pre><code class=\"language-python\">import numpy as np\nx = np.arange(6).reshape(2, 3)\ny = np.argmax(x, axis=1)\nprint(y)</code></pre>",
        options: ["<code>[5]</code>", "<code>[2, 5]</code>", "<code>[2, 2]</code>", "<code>[0, 1]</code>"],
        correct: 2,
        explanation: "`x` tạo ra mảng 2D: `[[0, 1, 2], [3, 4, 5]]`.<br>`np.argmax(x, axis=1)` tìm kiếm theo chiều ngang (trục 1 - cột) phần tử lớn nhất.<br>Hàng 1 max là `2` nằm ở index `2`. Hàng 2 max là `5` cũng ở index `2`. Trả về `[2, 2]`."
    },
    {
        type: "mcq",
        category: "Thư viện NumPy",
        question: "Trong quy tắc Broadcasting của NumPy, phép toán nào sau đây sẽ bị văng lỗi <code>ValueError: operands could not be broadcast together</code>?",
        options: [
            "<code>np.ones((3, 4)) + np.ones((1, 4))</code>",
            "<code>np.ones((4, 3)) + np.ones((3,))</code>",
            "<code>np.ones((3, 4)) + np.ones((4,))</code>",
            "<code>np.ones((4, 3)) + np.ones((4,))</code>"
        ],
        correct: 3,
        explanation: "Quy tắc Broadcasting: Bắt đầu so sánh từ chiều phải cùng sang trái. Hai chiều tương thích nếu chúng bằng nhau hoặc một trong hai bằng 1.<br>`(4, 3)` và `(4,)` $\\rightarrow$ chiều cuối cùng là `3` và `4` $\\rightarrow$ Bất đồng chiều, báo lỗi."
    },
    {
        type: "mcq",
        category: "Thư viện Pandas",
        question: "Cho DataFrame <code>df = pd.DataFrame({'Value': [10, 20, 30, 40]}, index=[2, 3, 0, 1])</code>.<br>Lệnh truy xuất <code>df.loc[0]</code> và <code>df.iloc[0]</code> lần lượt trả về giá trị nào?",
        options: ["10 và 10", "30 và 10", "10 và 30", "Báo lỗi KeyError"],
        correct: 1,
        explanation: "<code>loc[]</code> tìm dòng bằng <b>Tên nhãn (Label)</b>. Nhãn <code>0</code> nằm ở dòng thứ 3 $\\rightarrow$ Giá trị <code>30</code>.<br><code>iloc[]</code> tìm dòng bằng <b>Vị trí vật lý (Position)</b>. Dòng vật lý đầu tiên (index 0) $\\rightarrow$ Giá trị <code>10</code>."
    },
    {
        type: "mcq",
        category: "Thư viện Pandas",
        question: "Khi gộp 2 DataFrames bằng <code>pd.merge(df1, df2, on='ID')</code>, nếu cả 2 bảng đều có chứa chung một cột tên là <code>Status</code>, Pandas sẽ xử lý cột này như thế nào theo mặc định?",
        options: [
            "Báo lỗi trùng lặp cột.",
            "Tự động gộp thành 1 cột Status duy nhất.",
            "Đổi tên chúng thành <code>Status_x</code> và <code>Status_y</code>.",
            "Xóa cột Status đi."
        ],
        correct: 2,
        explanation: "Để tránh xung đột tên cột ngoài khóa `on`, Pandas mặc định thêm hậu tố (suffixes) `_x` cho bảng bên trái và `_y` cho bảng bên phải."
    },
    {
        type: "mcq",
        category: "Thư viện Pandas",
        question: "Trong chuẩn bị dữ liệu (Data Cleaning), hàm <code>df.dropna(axis=1)</code> sẽ thực hiện hành động gì?",
        options: [
            "Xóa tất cả các dòng (rows) có chứa ít nhất một giá trị NaN.",
            "Xóa tất cả các cột (columns) có chứa ít nhất một giá trị NaN.",
            "Điền giá trị 0 vào các ô NaN.",
            "Báo lỗi cú pháp vì axis phải là 'row' hoặc 'col'."
        ],
        correct: 1,
        explanation: "`dropna` dùng để xóa giá trị rỗng. `axis=0` (mặc định) là duyệt theo Index (xóa Dòng). `axis=1` là duyệt theo Columns (xóa Cột)."
    },
    {
        type: "mcq",
        category: "Thư viện Pandas",
        question: "Mục đích chính của hàm <code>pd.melt(df, id_vars=['ID'])</code> là gì?",
        options: [
            "Xóa các dữ liệu bị chảy (melt) hoặc biến dạng.",
            "Xoay bảng Pivot từ dạng rộng (Wide format) sang dạng dài (Long format) (Unpivot).",
            "Gộp nhóm dữ liệu theo từng ID.",
            "Nối (Concat) 2 DataFrames lại với nhau."
        ],
        correct: 1,
        explanation: "`melt()` là thao tác Unpivot. Nó nén (melt) nhiều cột số liệu thành 2 cột duy nhất là `variable` và `value`, giúp đưa data về dạng Tidy Data để dễ visualize."
    },

    // --- MACHINE LEARNING TRUYỀN THỐNG ---
    {
        type: "mcq",
        category: "Machine Learning (Classification)",
        question: "Trong bài toán phát hiện giao dịch gian lận thẻ tín dụng (Fraud Detection), ngân hàng quy định: <i>\"Thà báo động nhầm một giao dịch hợp lệ còn hơn bỏ sót giao dịch lừa đảo\"</i>. Mô hình phân loại cần ưu tiên tối ưu hóa metric nào?",
        options: ["Accuracy (Độ chính xác tổng)", "Precision (Độ chuẩn xác)", "Recall (Độ phủ)", "F1-Score"],
        correct: 2,
        explanation: "$$\\text{Recall} = \\frac{TP}{TP + FN}$$ Bỏ sót lừa đảo nghĩa là `FN` (False Negative) tăng. Ngân hàng sợ FN, nên cần tối ưu giảm thiểu FN $\\rightarrow$ Kéo Recall lên gần 1."
    },
    {
        type: "mcq",
        category: "Machine Learning (Optimization)",
        question: "Sự khác biệt cốt lõi nhất về quỹ đạo tối ưu (Optimization path) giữa Regularization $L_1$ (Lasso) và $L_2$ (Ridge) là gì?",
        options: [
            "$L_1$ kéo các hệ số không quan trọng về tiệm cận $0$, $L_2$ ép chúng về đúng bằng $0$ (Tạo Sparse Model).",
            "$L_1$ ép các hệ số không quan trọng về đúng $0$ (Feature Selection), $L_2$ chỉ thu nhỏ hệ số về gần $0$.",
            "$L_1$ dùng bình phương trọng số, $L_2$ dùng trị tuyệt đối.",
            "$L_1$ chống Underfitting, $L_2$ chống Overfitting."
        ],
        correct: 1,
        explanation: "Vùng khả thi của $L_1$ có dạng hình thoi nhọn, các đỉnh của hình thoi nằm ngay trên trục tọa độ, khiến nghiệm tối ưu dễ dàng rơi vào các đỉnh này $\\rightarrow$ Hệ số $w_i = 0$ (Sparse). $L_2$ là hình tròn nên chỉ thu nhỏ trọng số chứ hiếm khi bằng $0$."
    },
    {
        type: "mcq",
        category: "Machine Learning (Ensemble)",
        question: "Cơ chế <b>Bagging</b> trong thuật toán Random Forest hoạt động theo nguyên lý nào?",
        options: [
            "Huấn luyện các cây quyết định tuần tự, cây sau học từ sai lầm của cây trước.",
            "Huấn luyện nhiều cây độc lập, song song trên các mẫu dữ liệu ngẫu nhiên có hoàn lại (Bootstrap), rồi bầu chọn (Voting) kết quả.",
            "Cắt tỉa bớt các cành không quan trọng của một cây siêu sâu.",
            "Áp dụng Gradient Descent vào từng lá của cây."
        ],
        correct: 1,
        explanation: "Bagging = <b>B</b>ootstrap <b>Agg</b>regat<b>ing</b>. Kỹ thuật này giúp giảm mạnh Phương sai (Variance) của mô hình, khắc phục nhược điểm Overfitting đặc trưng của Decision Tree."
    },
    {
        type: "mcq",
        category: "Machine Learning (Clustering)",
        question: "K-Means Clustering sẽ hoạt động kém hiệu quả (sai bản chất) nhất đối với cấu trúc dữ liệu nào dưới đây?",
        options: [
            "Dữ liệu phân bố thành các cụm hình cầu rời rạc.",
            "Dữ liệu có nhiều chiều (khoảng 10 chiều).",
            "Dữ liệu phân bố thành các vòng tròn đồng tâm lồng vào nhau (Concentric circles).",
            "Dữ liệu có số lượng mẫu cực lớn (Big Data)."
        ],
        correct: 2,
        explanation: "K-Means gom cụm dựa trên <b>Khoảng cách Euclidean</b> và <b>Điểm trung bình (Centroid)</b>. Nó giả định các cụm có dạng lồi (convex) hình cầu. Với dữ liệu vòng tròn đồng tâm, điểm trung bình của cả 2 vòng tròn đều nằm ở tâm, khiến K-Means chia cắt sai hoàn toàn. (Trường hợp này phải dùng DBSCAN)."
    },
    {
        type: "mcq",
        category: "Machine Learning (Bias-Variance)",
        question: "Một mô hình có lỗi trên tập Huấn luyện (Train Error) rất lớn và lỗi trên tập Kiểm thử (Test Error) cũng lớn. Mô hình này đang gặp vấn đề gì và cách giải quyết?",
        options: [
            "Overfitting (High Variance) -> Cần thêm Regularization.",
            "Underfitting (High Bias) -> Cần tăng độ phức tạp mô hình (Thêm Features, dùng Model sâu hơn).",
            "Data Leakage -> Cần chia lại tập dữ liệu.",
            "Data Drift -> Cần huấn luyện lại với dữ liệu mới."
        ],
        correct: 1,
        explanation: "Khi Train Error lớn, nghĩa là mô hình không học được cả những patterns cơ bản nhất trên chính dữ liệu nó được dạy. Đây là <b>Underfitting (High Bias)</b>. Cách giải quyết là nới lỏng Regularization, tăng feature hoặc dùng mô hình mạnh hơn (VD: Linear $\\rightarrow$ Non-linear)."
    },

    // --- DEEP LEARNING ---
    {
        type: "mcq",
        category: "Deep Learning (Optimization)",
        question: "Trong quá trình huấn luyện bằng thuật toán Gradient Descent, bạn quan sát thấy đường cong Loss ban đầu giảm, nhưng sau đó dao động rất mạnh (oscillate) lên xuống hình răng cưa và không thể hội tụ. Nguyên nhân cốt lõi phổ biến nhất là gì?",
        options: [
            "Learning Rate (Tốc độ học) $\\alpha$ quá nhỏ.",
            "Learning Rate (Tốc độ học) $\\alpha$ quá lớn.",
            "Số lượng Epoch quá ngắn.",
            "Kích thước Batch size quá lớn."
        ],
        correct: 1,
        explanation: "Khi Learning Rate $\\alpha$ quá lớn, bước cập nhật trọng số sẽ vượt lố (overshoot) qua điểm cực tiểu toàn cục của hàm mất mát, văng qua lại hai bên sườn thung lũng tạo ra dao động mạnh, đôi khi dẫn đến Exploding Gradient (NaN)."
    },
    {
        type: "mcq",
        category: "Deep Learning (Activation)",
        question: "Vì sao hàm kích hoạt <b>ReLU</b> lại thay thế <b>Sigmoid/Tanh</b> làm chuẩn mực cho các mạng Neural Networks nhiều lớp (Deep NNs)?",
        options: [
            "Vì ReLU tạo ra tính phi tuyến phức tạp hơn Sigmoid.",
            "Vì đạo hàm của ReLU ở vùng dương luôn bằng 1, giúp giải quyết triệt để hiện tượng Triệt tiêu Gradient (Vanishing Gradient).",
            "Vì ReLU chuyển đổi tất cả giá trị về phạm vi $[0, 1]$.",
            "Vì ReLU ngăn chặn hoàn toàn hiện tượng Dead Neurons."
        ],
        correct: 1,
        explanation: "Sigmoid có đạo hàm lớn nhất chỉ là $0.25$. Khi nhân chuỗi đạo hàm trong mạng rất sâu (Chain Rule), gradient sẽ tiệm cận $0$ cực nhanh, làm các layer đầu không thể học (Vanishing Gradient). ReLU có đạo hàm $1$ (x>0), giúp gradient lan truyền nguyên vẹn về đáy mạng."
    },

    // --- MLOps & ĐẠO ĐỨC DỮ LIỆU ---
    {
        type: "mcq",
        category: "MLOps & Data Pipeline",
        question: "Hành động nào sau đây gây ra hiện tượng <b>Rò rỉ dữ liệu</b> (Data Leakage) nghiêm trọng nhất khi xây dựng mô hình dự đoán khả năng khách hàng vỡ nợ thẻ tín dụng?",
        options: [
            "Dùng `StandardScaler` gọi lệnh `.fit()` trên tập Train rồi `.transform()` cho cả Train và Test.",
            "Dùng `StandardScaler` gọi lệnh `.fit_transform()` trên TẤT CẢ dữ liệu trước khi gọi `train_test_split`.",
            "Lấy mẫu ngẫu nhiên (Random Sampling) làm tập Test thay vì lấy theo thời gian.",
            "Sử dụng SMOTE để oversample trước khi đưa vào mô hình."
        ],
        correct: 1,
        explanation: "Việc Fit Scaler trên toàn bộ dữ liệu khiến mô hình \"nhìn trộm\" (leak) thông tin thống kê (Mean, Variance) của tập Test vào tập Train. Trình tự đúng luôn phải là: Chia Train/Test $\\rightarrow$ Fit Scaler trên Train $\\rightarrow$ Transform Train & Test."
    },
    {
        type: "mcq",
        category: "MLOps & Data Pipeline",
        question: "Khái niệm <b>Data Drift</b> (Trôi dạt dữ liệu) trong MLOps mô tả hiện tượng gì?",
        options: [
            "Hệ thống bị hack khiến dữ liệu bị rò rỉ ra ngoài.",
            "Sự thay đổi về phân phối thống kê của dữ liệu đầu vào (Production Data) theo thời gian so với tập Training Data gốc, làm giảm hiệu suất mô hình.",
            "Việc dữ liệu Test bị lẫn vào dữ liệu Train.",
            "Lỗi do máy chủ quá tải làm mất mát dữ liệu theo cụm."
        ],
        correct: 1,
        explanation: "Thế giới thực liên tục thay đổi (Ví dụ: Thói quen tiêu dùng thay đổi sau dịch Covid). Dữ liệu thật đưa vào mô hình bị trôi dạt (Data Drift) so với dữ liệu lịch sử mô hình từng học, khiến Accuracy tụt dốc. Cần theo dõi và Retrain thường xuyên."
    },
    {
        type: "mcq",
        category: "Đạo đức AI & Dữ liệu",
        question: "Mô hình AI chấm điểm tín dụng của ngân hàng bị khách hàng đâm đơn kiện vì họ bị từ chối vay mà không được cấp lý do chính đáng. Ban giám đốc dùng mạng Deep Learning tiên tiến nhất. Vấn đề đạo đức/rủi ro kỹ thuật nào đang xảy ra?",
        options: [
            "Thiếu tính Ẩn danh dữ liệu (Anonymization).",
            "Mô hình quá chậm gây trải nghiệm tồi tệ.",
            "Thiếu tính Giải thích được (Explainable AI / Black Box Model).",
            "Rò rỉ PII (Personally Identifiable Information)."
        ],
        correct: 2,
        explanation: "Deep Learning là các mô hình \"Hộp đen\" (Black Box). Chúng ta biết input và output nhưng không giải thích được chính xác tại sao mạng neural lại đưa ra quyết định đó. Trong lĩnh vực tài chính, y tế, Explainability (Khả năng giải thích) là yêu cầu pháp lý bắt buộc (Ví dụ: Dùng SHAP/LIME hoặc đổi sang Random Forest)."
    },

    // --- CODE CHAY (ESSAY) ---
    {
        type: "essay",
        category: "Lập trình Pandas (Code chay)",
        question: "Cho DataFrame <code>df</code> gồm 3 cột <code>['Region', 'Product', 'Sales']</code>.<br>Viết 1 dòng code duy nhất tạo một bảng Pivot tổng kết (Pivot Table) sao cho: mỗi hàng (index) là một <code>Region</code>, mỗi cột (columns) là một <code>Product</code>, giá trị bên trong là tổng <code>sum</code> của <code>Sales</code>. Các ô trống (NaN) bắt buộc điền giá trị <code>0</code>.",
        options: [],
        correct: -1,
        explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">df.pivot_table(index='Region', columns='Product', values='Sales', aggfunc='sum', fill_value=0)</code></pre>"
    },
    {
        type: "essay",
        category: "Lập trình Pandas (Code chay)",
        question: "Cho DataFrame <code>df</code> có cột <code>['Name', 'Salary', 'Department']</code>.<br>Nhiều nhân viên bị thiếu dữ liệu lương (NaN). Viết 1 dòng code dùng phương thức <code>.transform()</code> để gán đè trực tiếp các ô NaN trong cột <code>Salary</code> bằng <b>giá trị Trung vị (Median) tính theo từng phòng ban</b> <code>Department</code>.",
        options: [],
        correct: -1,
        explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">df['Salary'] = df.groupby('Department')['Salary'].transform(lambda x: x.fillna(x.median()))</code></pre><br><i>Lý do dùng transform: Nó tính toán thống kê theo GroupBy nhưng trả về Series có độ dài y hệt mảng ban đầu, cho phép gán thẳng trở lại cột df['Salary'].</i>"
    },
    {
        type: "essay",
        category: "Lập trình Python (Code chay)",
        question: "Bạn đang xử lý một mảng NumPy <code>x = np.array([-2, 1, 0, 3, -5])</code>.<br>Hãy viết một dòng code sử dụng hàm của thư viện NumPy để thay thế toàn bộ các giá trị âm thành <code>0</code>, giữ nguyên các giá trị dương. (Gợi ý: Đây là thao tác mô phỏng chính xác hàm kích hoạt ReLU).",
        options: [],
        correct: -1,
        explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">x = np.where(x < 0, 0, x)\n# Hoặc dùng np.maximum\nx = np.maximum(0, x)</code></pre>"
    }
];
