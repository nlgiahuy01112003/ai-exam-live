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
,

    // --- TOÁN HỌC & THỐNG KÊ (10 CÂU) ---
    { type: "mcq", category: "Toán & Thống kê", question: "Xác suất của biến cố A là 0.4, biến cố B là 0.5. Nếu A và B độc lập, xác suất để ít nhất một trong hai biến cố xảy ra $P(A \\cup B)$ là:", options: ["0.9", "0.7", "0.2", "0.1"], correct: 1, explanation: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Do độc lập nên $P(A \\cap B) = P(A)P(B) = 0.4 \\times 0.5 = 0.2$. Vậy $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$." },
    { type: "mcq", category: "Toán & Thống kê", question: "Phân phối Poisson thường được sử dụng để mô hình hóa loại dữ liệu nào?", options: ["Dữ liệu liên tục phân bố đối xứng.", "Số lần một sự kiện xảy ra trong một khoảng thời gian cố định.", "Xác suất thành công của một phép thử nhị phân.", "Khoảng thời gian giữa các sự kiện."], correct: 1, explanation: "Phân phối Poisson dùng cho dữ liệu đếm (Count data), ví dụ: số lượng email nhận được trong 1 giờ." },
    { type: "mcq", category: "Toán & Thống kê", question: "Hiệp phương sai (Covariance) giữa 2 biến X và Y bằng 0. Điều nào sau đây là ĐÚNG?", options: ["X và Y hoàn toàn độc lập với nhau.", "Không có mối quan hệ tuyến tính giữa X và Y.", "X và Y có mối quan hệ phi tuyến hoàn hảo.", "Hệ số tương quan Pearson chắc chắn bằng 1."], correct: 1, explanation: "Covariance = 0 chỉ ngụ ý KHÔNG có tương quan TUYẾN TÍNH. Chúng vẫn có thể phụ thuộc phi tuyến (ví dụ $Y = X^2$ có Cov=0)." },
    { type: "mcq", category: "Toán & Thống kê", question: "Trong định lý giới hạn trung tâm (CLT), khi kích thước mẫu $n$ tiến tới vô cực, phân phối của 'trung bình mẫu' sẽ tiệm cận với phân phối nào?", options: ["Phân phối đều (Uniform)", "Phân phối nhị thức (Binomial)", "Phân phối chuẩn (Normal)", "Phân phối Student-t"], correct: 2, explanation: "CLT phát biểu rằng trung bình của các mẫu đủ lớn sẽ có phân phối chuẩn, bất chấp phân phối gốc của quần thể." },
    { type: "mcq", category: "Đại số tuyến tính", question: "Khoảng cách Cosine (Cosine Similarity) giữa 2 vector $A = [1, 0, 0]$ và $B = [0, 1, 0]$ là bao nhiêu?", options: ["0", "1", "-1", "0.5"], correct: 0, explanation: "Cosine Similarity = $\\frac{A \\cdot B}{\\|A\\| \\|B\\|}$. Tích vô hướng $A \\cdot B = (1\\times0)+(0\\times1)+(0\\times0) = 0$. Cosine = 0 tức là góc $90^\\circ$ (Vuông góc)." },
    { type: "mcq", category: "Đại số tuyến tính", question: "Hạng (Rank) của ma trận là gì?", options: ["Số lượng hàng của ma trận.", "Số lượng cột của ma trận.", "Số lượng lớn nhất các hàng (hoặc cột) độc lập tuyến tính.", "Tổng các phần tử trên đường chéo chính."], correct: 2, explanation: "Rank đại diện cho số chiều của không gian vector được sinh ra bởi các hàng (hoặc cột) của ma trận." },
    { type: "mcq", category: "Đại số tuyến tính", question: "Ma trận nào sau đây KHÔNG THỂ có ma trận nghịch đảo?", options: ["Ma trận đường chéo có các phần tử khác 0.", "Ma trận đơn vị (Identity Matrix).", "Ma trận vuông có định thức (Determinant) bằng 0.", "Ma trận đối xứng."], correct: 2, explanation: "Ma trận có định thức (det) = 0 được gọi là ma trận suy biến (Singular Matrix), và nó không có ma trận nghịch đảo." },
    { type: "mcq", category: "Giải tích", question: "Đạo hàm riêng (Partial Derivative) của hàm $f(x, y) = x^2y + 3xy^2$ theo biến $x$ là:", options: ["$x^2 + 6xy$", "$2xy + 3y^2$", "$2xy + 6xy$", "$2x + 3y^2$"], correct: 1, explanation: "Khi đạo hàm theo $x$, coi $y$ là hằng số: $\\frac{\\partial f}{\\partial x} = 2xy + 3y^2$." },
    { type: "mcq", category: "Giải tích", question: "Thuật toán Gradient Descent cập nhật trọng số $w$ theo quy tắc nào? (Với $\\alpha$ là learning rate, $L$ là loss)", options: ["$w = w + \\alpha \\nabla L$", "$w = w - \\alpha \\nabla L$", "$w = \\alpha \\nabla L - w$", "$w = w \\times \\alpha \\nabla L$"], correct: 1, explanation: "Di chuyển ngược hướng với Gradient (đạo hàm) để đi xuống đáy của hàm Loss: $w_{new} = w_{old} - \\alpha \\frac{\\partial L}{\\partial w}$." },
    { type: "mcq", category: "Toán & Thống kê", question: "Khoảng tin cậy (Confidence Interval) 95% có ý nghĩa là gì?", options: ["Có 95% xác suất tham số thực của quần thể nằm trong khoảng này.", "Nếu lặp lại quá trình lấy mẫu nhiều lần, 95% số khoảng tin cậy được tạo ra sẽ chứa tham số thực.", "95% dữ liệu của mẫu nằm trong khoảng này.", "Sai số dự đoán của mô hình là 5%."], correct: 1, explanation: "Về mặt thống kê Frequentist, khoảng tin cậy 95% mang ý nghĩa lặp lại quá trình lấy mẫu dài hạn, 95% số khoảng tạo ra sẽ bao phủ giá trị thực." },

    // --- PYTHON, NUMPY, PANDAS (15 CÂU) ---
    { type: "mcq", category: "Thư viện NumPy", question: "Phép toán <code>np.dot(A, B)</code> và <code>A * B</code> (với A, B là mảng numpy 2D) khác nhau thế nào?", options: ["Giống hệt nhau.", "<code>np.dot</code> là nhân ma trận, <code>*</code> là nhân từng phần tử tương ứng (element-wise).", "<code>np.dot</code> là nhân element-wise, <code>*</code> là nhân ma trận.", "<code>*</code> chỉ dùng được cho ma trận 1D."], correct: 1, explanation: "Toán tử `*` trong NumPy thực hiện nhân element-wise (Hadamard product), còn `np.dot()` hoặc `@` thực hiện nhân ma trận truyền thống đại số tuyến tính." },
    { type: "mcq", category: "Thư viện NumPy", question: "Đoạn code: <code>a = np.array([1, 2, 3]); b = a; b[0] = 99</code>. Giá trị của <code>a[0]</code> là bao nhiêu?", options: ["1", "99", "Báo lỗi", "0"], correct: 1, explanation: "Trong NumPy, `b = a` chỉ tạo tham chiếu (reference) đến cùng một vùng nhớ. Thay đổi `b` sẽ thay đổi cả `a`. Để copy thực sự, phải dùng `a.copy()`." },
    { type: "mcq", category: "Thư viện NumPy", question: "Hàm <code>np.linspace(0, 10, 5)</code> tạo ra mảng như thế nào?", options: ["<code>[0, 2, 4, 6, 8]</code>", "<code>[0, 2.5, 5, 7.5, 10]</code>", "<code>[0, 2, 4, 6, 8, 10]</code>", "<code>[0, 10, 10, 10, 10]</code>"], correct: 1, explanation: "<code>linspace(start, stop, num)</code> tạo ra <code>num</code> (là 5) phần tử cách đều nhau trong đoạn từ start đến stop (bao gồm cả stop). Cụ thể là 0, 2.5, 5, 7.5, 10." },
    { type: "mcq", category: "Thư viện NumPy", question: "Đoạn code: <code>x = np.arange(9).reshape(3,3); print(x[::-1, ::-1])</code> có tác dụng gì?", options: ["Tính ma trận nghịch đảo.", "Chuyển vị ma trận (Transpose).", "Lật ngược ma trận cả theo chiều ngang và dọc.", "Lấy các phần tử trên đường chéo."], correct: 2, explanation: "`[::-1, ::-1]` là kỹ thuật slicing với step = -1 cho cả 2 trục, do đó ma trận bị lật ngược thứ tự dòng và lật ngược luôn thứ tự cột." },
    { type: "mcq", category: "Thư viện Pandas", question: "Trong Pandas, thuộc tính nào trả về kích thước (số dòng, số cột) của DataFrame?", options: ["<code>df.size</code>", "<code>df.shape</code>", "<code>df.dim</code>", "<code>df.len()</code>"], correct: 1, explanation: "`df.shape` trả về tuple dạng (rows, columns). `df.size` trả về tổng số lượng phần tử (rows * columns)." },
    { type: "mcq", category: "Thư viện Pandas", question: "Sự khác biệt giữa <code>df.fillna(method='ffill')</code> và <code>bfill</code> là gì?", options: ["`ffill` điền bằng trung bình, `bfill` điền bằng trung vị.", "`ffill` lấy giá trị hàng TRƯỚC đó điền xuống, `bfill` lấy giá trị hàng SAU đó điền lên.", "`ffill` áp dụng cho dòng, `bfill` áp dụng cho cột.", "Không có sự khác biệt."], correct: 1, explanation: "`ffill` = Forward Fill (điền xuôi từ trên xuống). `bfill` = Backward Fill (điền ngược từ dưới lên). Rất hay dùng trong chuỗi thời gian." },
    { type: "mcq", category: "Thư viện Pandas", question: "Lệnh <code>df.groupby('A')['B'].agg(['mean', 'sum'])</code> làm gì?", options: ["Báo lỗi vì .agg không nhận List.", "Gộp nhóm theo cột A, tính trung bình và tổng của cột B cho mỗi nhóm.", "Gộp nhóm theo cột B, tính trung bình cột A.", "Lọc ra các giá trị trung bình và tổng của cả DataFrame."], correct: 1, explanation: "Hàm `.agg()` cho phép áp dụng đồng thời nhiều hàm thống kê (như mean, sum, max) lên một hoặc nhiều cột sau khi GroupBy." },
    { type: "mcq", category: "Thư viện Pandas", question: "Làm thế nào để đổi tên cột 'OldName' thành 'NewName' trong Pandas?", options: ["<code>df.rename(columns={'OldName': 'NewName'})</code>", "<code>df.columns['OldName'] = 'NewName'</code>", "<code>df['NewName'] = df['OldName'].rename()</code>", "<code>df.set_column('OldName', 'NewName')</code>"], correct: 0, explanation: "Sử dụng method `rename` kết hợp dictionary truyền vào tham số `columns` là cách chuẩn để đổi tên cột." },
    { type: "mcq", category: "Lập trình Python", question: "Lambda function là gì trong Python?", options: ["Hàm xử lý đa luồng.", "Hàm không có tên (Anonymous function) được định nghĩa trên 1 dòng duy nhất.", "Hàm chuyên dùng để vẽ biểu đồ.", "Từ khóa khai báo biến toàn cục."], correct: 1, explanation: "Lambda là hàm ẩn danh, ví dụ `lambda x: x**2`, thường dùng kèm với map(), filter() hoặc pandas apply()." },
    { type: "mcq", category: "Lập trình Python", question: "Trong Python, cấu trúc dữ liệu nào KHÔNG có thứ tự (Unordered) và KHÔNG chứa phần tử trùng lặp?", options: ["List", "Tuple", "Set", "Dictionary"], correct: 2, explanation: "Set là tập hợp các phần tử duy nhất, không có thứ tự. Việc kiểm tra phần tử `x in set` có độ phức tạp O(1) do sử dụng Hash Table." },
    { type: "essay", category: "Thư viện Pandas (Code chay)", question: "Cho DataFrame <code>df</code>. Hãy viết 1 dòng code để tạo ra một DataFrame mới chỉ giữ lại các cột có kiểu dữ liệu là SỐ (int64, float64).", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>df.select_dtypes(include=['number'])</code><br>Hoặc: <code>df.select_dtypes(include=['int64', 'float64'])</code>" },
    { type: "essay", category: "Thư viện Pandas (Code chay)", question: "Cho DataFrame <code>df</code> có cột <code>'Date'</code> đang ở dạng chuỗi (String) 'YYYY-MM-DD'. Hãy viết 1 dòng code ép kiểu cột này về định dạng Datetime chuẩn của Pandas.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>df['Date'] = pd.to_datetime(df['Date'])</code>" },
    { type: "essay", category: "Thư viện Pandas (Code chay)", question: "Hãy viết 1 dòng lệnh Pandas để nối (concatenate) hai DataFrame <code>df1</code> và <code>df2</code> theo CHIỀU NGANG (cột này nằm cạnh cột kia).", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>pd.concat([df1, df2], axis=1)</code>" },
    { type: "essay", category: "Thư viện Pandas (Code chay)", question: "Viết lệnh để đếm số lượng giá trị rỗng (NaN) trong TỪNG CỘT của <code>df</code>.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>df.isnull().sum()</code> hoặc <code>df.isna().sum()</code>" },
    { type: "essay", category: "Thư viện NumPy (Code chay)", question: "Cho mảng numpy 1D <code>arr = np.array([1, 2, 3, 4, 5, 6])</code>. Viết lệnh reshape mảng này thành mảng 2D có 2 cột (số hàng tự động tính).", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>arr.reshape(-1, 2)</code><br><i>Số -1 báo cho NumPy tự động tính toán kích thước chiều đó dựa trên tổng số phần tử.</i>" },

    // --- MACHINE LEARNING TRUYỀN THỐNG (11 CÂU) ---
    { type: "mcq", category: "Machine Learning (Evaluation)", question: "Trong ma trận nhầm lẫn (Confusion Matrix), khái niệm False Positive (Type I Error) nghĩa là gì?", options: ["Mô hình dự đoán Âm tính, và thực tế là Âm tính.", "Mô hình dự đoán Dương tính, nhưng thực tế là Âm tính.", "Mô hình dự đoán Âm tính, nhưng thực tế là Dương tính.", "Mô hình dự đoán Dương tính, và thực tế là Dương tính."], correct: 1, explanation: "False (Dự đoán sai) Positive (Dự đoán là Dương tính). Tức là Thực tế Âm tính, nhưng mô hình lại báo Dương tính (Báo động giả)." },
    { type: "mcq", category: "Machine Learning (Algorithms)", question: "Thuật toán K-Nearest Neighbors (KNN) là một dạng của:", options: ["Eager Learning (Học háo hức).", "Lazy Learning (Học lười biếng).", "Unsupervised Learning (Học không giám sát).", "Reinforcement Learning (Học tăng cường)."], correct: 1, explanation: "KNN được gọi là Lazy Learning vì nó không xây dựng mô hình tổng quát (không có hàm mục tiêu/trọng số) trong giai đoạn Train. Nó chỉ lưu trữ dữ liệu và tính toán toàn bộ lúc dự đoán (Predict)." },
    { type: "mcq", category: "Machine Learning (SVM)", question: "Khái niệm <b>Kernel Trick</b> trong Support Vector Machines (SVM) dùng để giải quyết vấn đề gì?", options: ["Tăng tốc độ hội tụ của Gradient Descent.", "Khắc phục hiện tượng Overfitting.", "Chuyển dữ liệu từ không gian tuyến tính không thể phân tách sang không gian nhiều chiều hơn để có thể phân tách tuyến tính.", "Giảm số chiều dữ liệu tương tự PCA."], correct: 2, explanation: "Kernel Trick (như RBF, Polynomial) tính toán tích vô hướng trong không gian chiều cao mà không cần biến đổi vật lý dữ liệu gốc, giúp vẽ được đường phân chia (hyperplane) uốn lượn phi tuyến tính." },
    { type: "mcq", category: "Machine Learning (Trees)", question: "Trong Decision Tree, tiêu chí <b>Gini Impurity</b> (Độ tinh khiết Gini) được tính toán nhằm mục đích gì?", options: ["Xác định đặc trưng (feature) nào nên được dùng để chia tách (split) tại mỗi node.", "Tính toán Learning Rate tối ưu.", "Cắt tỉa các cành thừa.", "Đo lường độ sâu tối đa của cây."], correct: 0, explanation: "Gini Impurity đo lường độ lẫn lộn của các nhãn trong một node. Thuật toán (như CART) chọn feature nào giúp giảm Gini Impurity nhiều nhất (Tối đa hóa Information Gain) để làm node phân nhánh." },
    { type: "mcq", category: "Machine Learning (Ensemble)", question: "Sự khác biệt giữa Gradient Boosting (XGBoost/LightGBM) và Random Forest là gì?", options: ["Gradient Boosting dùng cây hồi quy, RF dùng cây phân loại.", "Gradient Boosting xây dựng các cây tuần tự sửa lỗi cho nhau, RF xây các cây độc lập song song.", "Gradient Boosting dễ bị Underfitting hơn RF.", "RF nhanh hơn Gradient Boosting lúc Predict."], correct: 1, explanation: "Boosting xây cây tuần tự (sequential) để tối ưu hóa hàm loss dư thừa (residuals). Bagging (Random Forest) xây cây song song hoàn toàn độc lập." },
    { type: "mcq", category: "Machine Learning (Metrics)", question: "AUC-ROC Curve biểu diễn mối quan hệ giữa hai đại lượng nào?", options: ["Precision và Recall.", "True Positive Rate (TPR) và False Positive Rate (FPR).", "Accuracy và F1-Score.", "Mean Squared Error và Learning Rate."], correct: 1, explanation: "Đường cong ROC vẽ TPR (Sensitivity/Recall) trên trục tung và FPR (1 - Specificity) trên trục hoành tại nhiều ngưỡng Threshold khác nhau." },
    { type: "mcq", category: "Machine Learning (Imbalanced Data)", question: "Khi đối mặt với dữ liệu mất cân bằng nghiêm trọng (Ví dụ: 99% nhãn 0, 1% nhãn 1), kỹ thuật nào KHÔNG NÊN được sử dụng?", options: ["SMOTE (Synthetic Minority Over-sampling Technique).", "Undersampling (Giảm bớt nhóm đa số).", "Đo lường hiệu suất bằng Accuracy.", "Đo lường bằng F1-Score và Precision-Recall Curve."], correct: 2, explanation: "Khi dữ liệu lệch 99:1, một mô hình 'ngu ngốc' luôn dự đoán là 0 sẽ đạt Accuracy 99%, tạo cảm giác mô hình rất tốt. Phải dùng F1-Score, PR-AUC thay thế." },
    { type: "mcq", category: "Machine Learning (Regression)", question: "Đại lượng $R^2$ (R-squared) trong Hồi quy tuyến tính (Linear Regression) mang ý nghĩa gì?", options: ["Tỷ lệ lỗi dự đoán của mô hình.", "Tỷ lệ phần trăm sự biến thiên của biến mục tiêu (Y) được giải thích bởi các biến độc lập (X).", "Hệ số góc của đường hồi quy.", "Tổng bình phương phần dư (RSS)."], correct: 1, explanation: "$R^2$ (Coefficient of Determination) dao động từ 0 đến 1. $R^2=0.8$ nghĩa là mô hình giải thích được 80% sự biến thiên của dữ liệu." },
    { type: "mcq", category: "Machine Learning (Clustering)", question: "Thuật toán gom cụm nào có khả năng xử lý tốt các cụm có hình dạng tùy ý (phi tuyến tính) và phát hiện nhiễu (outliers)?", options: ["K-Means", "DBSCAN", "Gaussian Mixture Models (GMM)", "Hierarchical Clustering"], correct: 1, explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) gom cụm dựa trên mật độ. Các điểm trong vùng mật độ cao thành 1 cụm, các điểm lẻ loi bị đánh dấu là nhiễu (Noise)." },
    { type: "mcq", category: "Machine Learning (Feature Eng)", question: "One-Hot Encoding thường được áp dụng cho loại dữ liệu nào?", options: ["Dữ liệu số thực liên tục (Continuous).", "Dữ liệu dạng thời gian (Datetime).", "Dữ liệu hạng mục không có thứ tự (Nominal Categorical).", "Dữ liệu hình ảnh."], correct: 2, explanation: "One-Hot Encoding chuyển biến Categorical (VD: Màu sắc Đỏ, Xanh, Vàng) thành các cột nhị phân (0/1), tránh việc mô hình hiểu nhầm là có sự hơn kém về độ lớn (như Label Encoding: 1, 2, 3)." },
    { type: "mcq", category: "Machine Learning (Regularization)", question: "Khi tham số $C$ trong thuật toán Logistic Regression (hoặc SVM) trong thư viện <code>sklearn</code> được thiết lập RẤT LỚN, điều gì xảy ra?", options: ["Mô hình bị Underfitting nặng.", "Mức độ Regularization giảm đi, mô hình cố gắng fit tối đa vào tập Train (dễ Overfitting).", "Mức độ Regularization tăng mạnh.", "Mô hình bỏ qua mọi dữ liệu nhiễu."], correct: 1, explanation: "Trong sklearn, tham số $C$ là <b>nghịch đảo</b> của độ mạnh Regularization ($C = \\frac{1}{\\lambda}$). $C$ càng lớn $\\rightarrow \\lambda$ càng nhỏ $\\rightarrow$ mô hình ít bị phạt, dễ Overfitting." }
,

    // --- DEEP LEARNING & NEURAL NETWORKS (15 CÂU) ---
    { type: "mcq", category: "Deep Learning (Basics)", question: "Kiến trúc mạng nơ-ron truyền thẳng (Feedforward Neural Network) khác với Mạng nơ-ron hồi quy (RNN) ở điểm cốt lõi nào?", options: ["FNN dùng Sigmoid, RNN dùng ReLU.", "FNN chỉ có thông tin chảy theo một chiều từ Input tới Output, RNN có các vòng lặp phản hồi (feedback loops) mang trạng thái ẩn (hidden state).", "FNN chỉ xử lý được hình ảnh, RNN xử lý văn bản.", "FNN không cần hàm kích hoạt."], correct: 1, explanation: "RNN có các kết nối phản hồi, cho phép nó lưu giữ 'bộ nhớ' (memory) về các đầu vào trước đó, rất phù hợp cho dữ liệu chuỗi (chuỗi thời gian, văn bản)." },
    { type: "mcq", category: "Deep Learning (CNN)", question: "Lớp Max Pooling trong Mạng nơ-ron tích chập (CNN) có vai trò chính là gì?", options: ["Tăng kích thước của bức ảnh.", "Thêm các đặc trưng màu sắc vào ảnh.", "Giảm chiều không gian (Downsampling) của đặc trưng, làm giảm số lượng tham số tính toán và tạo ra tính bất biến dịch chuyển (Translation Invariance).", "Tính đạo hàm nhanh hơn."], correct: 2, explanation: "Max Pooling trích xuất đặc trưng nổi bật nhất (giá trị lớn nhất) trong một vùng (ví dụ 2x2), nén kích thước Feature Map lại phân nửa, giúp chống overfitting." },
    { type: "mcq", category: "Deep Learning (CNN)", question: "Cho ảnh đầu vào kích thước 32x32. Đi qua một lớp Convolutional có kích thước bộ lọc (kernel) là 3x3, bước trượt (stride) là 1, và Padding là 0 (Valid Padding). Kích thước của Feature Map đầu ra là bao nhiêu?", options: ["32x32", "31x31", "30x30", "29x29"], correct: 2, explanation: "Công thức: $Output = \\frac{Input - Kernel + 2\\times Padding}{Stride} + 1 = \\frac{32 - 3 + 0}{1} + 1 = 30$. Vậy đầu ra là 30x30." },
    { type: "mcq", category: "Deep Learning (Optimization)", question: "Kỹ thuật <b>Dropout</b> được sử dụng để làm gì trong việc huấn luyện Deep Learning?", options: ["Loại bỏ các dữ liệu Outlier ra khỏi tập Train.", "Ngẫu nhiên 'tắt' (zero-out) một tỷ lệ % các nơ-ron trong quá trình Forward/Backward pass nhằm ép mạng không được phụ thuộc quá mức vào bất kỳ nơ-ron cụ thể nào (Chống Overfitting).", "Tắt toàn bộ mạng nơ-ron khi hàm Loss hội tụ.", "Xóa bớt các layer ẩn khi chạy dự đoán thực tế."], correct: 1, explanation: "Dropout là kỹ thuật Regularization mạnh mẽ. Lưu ý: Dropout CHỈ được bật lúc Training, khi Testing (Predict) mọi nơ-ron đều được bật lên nhưng bị scale trọng số." },
    { type: "mcq", category: "Deep Learning (NLP)", question: "Trong các mô hình Ngôn ngữ Lớn (LLMs) như Transformer, cơ chế <b>Self-Attention</b> giải quyết được nhược điểm chí mạng nào của kiến trúc RNN/LSTM truyền thống?", options: ["Self-Attention tốn ít bộ nhớ RAM hơn.", "Self-Attention xử lý tất cả các từ trong câu song song (Parallelization) và nắm bắt trực tiếp ngữ cảnh khoảng cách xa, thay vì xử lý tuần tự từng từ như RNN gây nghẽn cổ chai.", "Self-Attention không cần dùng Backpropagation.", "Self-Attention không bị Overfitting bao giờ."], correct: 1, explanation: "RNN phải chờ xử lý từ n-1 xong mới tính được từ n. Attention tính ma trận Q, K, V cho toàn bộ chuỗi cùng lúc (nhân ma trận cực nhanh trên GPU) và không bị suy giảm thông tin tầm xa." },
    { type: "mcq", category: "Deep Learning (Loss Functions)", question: "Bài toán Phân loại nhiều lớp độc quyền (Multi-class Classification, VD: Ảnh chỉ là Chó hoặc Mèo hoặc Gà), hàm Kích hoạt ở lớp Output và hàm Loss Function tương ứng bắt buộc phải là:", options: ["Sigmoid + Binary Crossentropy", "Softmax + Categorical Crossentropy", "ReLU + Mean Squared Error", "Tanh + Hinge Loss"], correct: 1, explanation: "Softmax ép tổng xác suất của các lớp cộng lại đúng bằng 1. Categorical Cross-entropy đo khoảng cách giữa phân phối xác suất dự đoán và nhãn One-Hot thực tế." },
    { type: "mcq", category: "Deep Learning (Loss Functions)", question: "Bài toán Phân loại đa nhãn (Multi-label Classification, VD: Một bức ảnh có thể VỪA có chó, VỪA có mèo, VỪA có xe đạp), hàm Kích hoạt lớp Output và hàm Loss là:", options: ["Sigmoid + Binary Crossentropy", "Softmax + Categorical Crossentropy", "ReLU + Mean Squared Error", "Tanh + Categorical Crossentropy"], correct: 0, explanation: "Trong Multi-label, các class độc lập với nhau (xác suất xuất hiện chó không ảnh hưởng xác suất xuất hiện mèo). Do đó ta dùng Sigmoid cho từng node Output (ép về 0-1 riêng biệt) và Binary Cross-entropy." },
    { type: "mcq", category: "Deep Learning (Generative)", question: "Trong kiến trúc mạng sinh đối nghịch GAN (Generative Adversarial Networks), Discriminator (Mạng phân biệt) có nhiệm vụ gì?", options: ["Sinh ra hình ảnh mới từ nhiễu ngẫu nhiên.", "Giảm chiều dữ liệu hình ảnh thành vector đặc trưng.", "Cố gắng phân biệt đâu là dữ liệu thật từ tập huấn luyện, đâu là dữ liệu giả do Generator tạo ra.", "Khôi phục ảnh bị nhiễu về ảnh gốc."], correct: 2, explanation: "GAN là cuộc chiến Min-Max. Generator cố tạo ảnh giả lừa Discriminator, còn Discriminator làm cảnh sát cố gắng bắt lỗi Generator." },
    { type: "mcq", category: "Deep Learning (Transfer Learning)", question: "Thuật ngữ <b>Fine-tuning</b> trong Transfer Learning (Học chuyển giao) thường ám chỉ hành động nào?", options: ["Đóng băng (Freeze) toàn bộ trọng số mạng pretrained, chỉ thay thế và huấn luyện lớp Output cuối cùng.", "Mở khóa (Unfreeze) một phần hoặc toàn bộ trọng số của mạng pretrained và huấn luyện tiếp với learning rate cực nhỏ trên dataset mới.", "Khởi tạo mạng với trọng số ngẫu nhiên rồi dùng bộ tham số siêu tối ưu (Hyper-tuning).", "Nén dung lượng mô hình bằng cách Quantization."], correct: 1, explanation: "Feature Extraction là việc đóng băng trọng số. Fine-tuning là việc unfreeze các lớp sâu hơn (hoặc toàn bộ mạng) để tinh chỉnh nhẹ trọng số cho phù hợp với Data mới. Luôn dùng Learning Rate rất nhỏ để tránh phá nát trọng số đã được train trước." },
    { type: "mcq", category: "Deep Learning (RNN)", question: "Khái niệm 'Exploding Gradient' (Triệt tiêu/Bùng nổ Gradient) trong RNN xảy ra do nguyên nhân toán học nào?", options: ["Dữ liệu đầu vào chưa được chuẩn hóa Standard Scaler.", "Việc nhân liên tiếp cùng một ma trận trọng số (Weight matrix) lặp đi lặp lại nhiều lần theo chuỗi thời gian.", "Thuật toán Adam hội tụ sai hướng.", "Số lượng Nơ-ron ẩn quá ít."], correct: 1, explanation: "RNN thực thi Backpropagation Through Time (BPTT). Nếu norm của ma trận trọng số hồi quy $> 1$, nhân lũy thừa $W^n$ tiến tới vô cực (Explode). Nếu $< 1$, nó tiến về 0 (Vanish)." },
    { type: "essay", category: "Deep Learning (Code chay Keras)", question: "Sử dụng Keras (TensorFlow), hãy viết 1 lệnh định nghĩa một lớp ẩn (Dense Layer) có 128 nơ-ron, dùng hàm kích hoạt ReLU, với đầu vào dạng mảng 1D có kích thước 784.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">tf.keras.layers.Dense(128, activation='relu', input_shape=(784,))</code></pre>" },
    { type: "essay", category: "Deep Learning (Code chay Keras)", question: "Viết 1 lệnh compile model Keras cho bài toán phân loại đa lớp sử dụng thuật toán tối ưu Adam và hàm loss phù hợp nhất (dữ liệu nhãn đã được One-Hot).", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])</code></pre>" },
    { type: "essay", category: "Deep Learning (Code chay PyTorch)", question: "Trong PyTorch, khi bắt đầu vòng lặp huấn luyện, việc đầu tiên cần làm với Optimizer để xóa sạch dải Gradient cũ (tránh tích lũy Gradient cộng dồn) là gọi lệnh gì?", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">optimizer.zero_grad()</code></pre>" },
    { type: "essay", category: "Deep Learning (Code chay PyTorch)", question: "Trong PyTorch, lệnh dùng để tính toán luân chuyển ngược (Backpropagation) dựa trên giá trị của biến <code>loss</code> là gì?", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">loss.backward()</code></pre>" },
    { type: "essay", category: "Deep Learning (Code chay PyTorch)", question: "Lệnh nào trong PyTorch được gọi sau <code>loss.backward()</code> để thực thi việc cập nhật các trọng số của mạng?", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><pre><code class=\"language-python\">optimizer.step()</code></pre>" },

    // --- MLOps, HẠ TẦNG & DỮ LIỆU LỚN (7 CÂU) ---
    { type: "mcq", category: "MLOps", question: "Trong kiến trúc triển khai Machine Learning, <b>A/B Testing</b> được sử dụng nhằm mục đích gì?", options: ["Kiểm tra xem dữ liệu có bị Leakage không.", "Chạy song song phiên bản Model hiện tại (Control) và Model mới (Variant) với lưu lượng user thực tế, so sánh metric kinh doanh để quyết định xem có nên thay thế hoàn toàn không.", "Kiểm thử Unit Test cho mã nguồn.", "Kiểm tra giới hạn chịu tải (Load test) của API inference."], correct: 1, explanation: "A/B Testing (hoặc Canary Deployment) là tiêu chuẩn vàng để xác minh xem mô hình AI mới có mang lại doanh thu/Lượt click (CTR) tốt hơn mô hình AI cũ ở ngoài thực tế hay không." },
    { type: "mcq", category: "MLOps", question: "Khái niệm <b>Feature Store</b> trong hệ thống MLOps hiện đại có ý nghĩa là gì?", options: ["Nơi lưu trữ mã nguồn của mô hình.", "Một kho dữ liệu tập trung quản lý việc tiền xử lý đặc trưng, đảm bảo tính nhất quán (Consistency) của Feature giữa lúc Training (Offline) và lúc Dự đoán thực tế (Online).", "Kho ứng dụng mua bán các mô hình AI.", "Nơi lưu trữ các version của thư viện Python."], correct: 1, explanation: "Feature Store khắc phục lỗi lệch pha Training-Serving Skew. Ví dụ đặc trưng 'Lịch sử mua hàng 7 ngày' phải được tính giống hệt nhau khi train batch offline và khi truy xuất realtime lúc user đang lướt web." },
    { type: "mcq", category: "Kiến trúc Dữ liệu", question: "Sự khác biệt chính giữa Data Warehouse (Kho dữ liệu) và Data Lake (Hồ dữ liệu) là gì?", options: ["Data Lake chỉ chứa dữ liệu dạng bảng, Warehouse chứa mọi thứ.", "Warehouse lưu trữ dữ liệu đã qua làm sạch, có cấu trúc (Relational) phục vụ BI. Data Lake lưu trữ mọi định dạng dữ liệu thô (Raw) kể cả phi cấu trúc (Ảnh, Text) ở dạng rẻ tiền.", "Warehouse lưu trên Cloud, Lake lưu dưới On-premise.", "Warehouse dùng cho Deep Learning, Lake dùng cho SQL."], correct: 1, explanation: "Data Lake giữ lại nguyên bản Data (Schema-on-read). Data Warehouse yêu cầu phải ETL dữ liệu thật chuẩn rồi mới đưa vào bảng (Schema-on-write)." },
    { type: "mcq", category: "Đạo đức AI & Dữ liệu", question: "Khi xử lý dữ liệu Y tế (Healthcare Data), hành động thay thế Tên bệnh nhân bằng một mã định danh ngẫu nhiên (VD: Patient_A1B2) được gọi là kỹ thuật gì?", options: ["Data Encryption (Mã hóa).", "Pseudonymization (Bút danh hóa/Giả danh hóa).", "Data Hashing (Băm dữ liệu).", "Data Augmentation (Tăng cường dữ liệu)."], correct: 1, explanation: "Pseudonymization (Giả danh hóa) khác với Anonymization (Ẩn danh hoàn toàn) ở chỗ ta vẫn có thể ánh xạ ngược lại người thật nếu có Bảng Key giải mã bảo mật. Việc này cho phép theo dõi lịch sử khám bệnh qua thời gian." },
    { type: "mcq", category: "MLOps", question: "Định dạng file nào sau đây được tối ưu hóa đặc biệt cho việc lưu trữ dữ liệu dạng cột (Columnar format), cực kỳ phù hợp cho Big Data Analytics và Machine Learning trong hệ sinh thái Hadoop/Spark?", options: ["CSV (Comma-Separated Values)", "JSON (JavaScript Object Notation)", "Parquet", "XML (eXtensible Markup Language)"], correct: 2, explanation: "Apache Parquet lưu trữ dữ liệu theo chiều dọc (Column-oriented), hỗ trợ nén dữ liệu cực mạnh và query siêu nhanh khi chỉ cần lôi ra 1-2 cột trong cái bảng có 1000 cột." },
    { type: "mcq", category: "Đạo đức AI & Dữ liệu", question: "Thiên kiến dữ liệu (Data Bias) thường gây ra hậu quả gì nghiêm trọng nhất trong các hệ thống chấm điểm rủi ro tội phạm bằng AI?", options: ["Làm tăng độ phức tạp thuật toán.", "Mô hình đưa ra kết quả phân biệt đối xử (Discrimination) đối với các nhóm thiểu số, dựa trên các feature như giới tính, mã bưu điện, chủng tộc.", "Mô hình sẽ sinh ra Data Leakage.", "Mô hình chạy tốn nhiều GPU hơn."], correct: 1, explanation: "Mô hình AI chỉ học từ Lịch sử. Nếu lịch sử chứa các quyết định thành kiến (vd cảnh sát hay bắt giữ người da màu do thành kiến cũ), AI sẽ khuếch đại thành kiến đó (Historical Bias)." },
    { type: "mcq", category: "MLOps", question: "Công cụ nào sau đây thường xuyên được sử dụng làm <b>Containerization</b> tiêu chuẩn để đóng gói mô hình AI thành Image, đảm bảo chạy giống hệt nhau trên máy lập trình viên và trên Server?", options: ["Git", "Terraform", "Docker", "Apache Kafka"], correct: 2, explanation: "Docker giải quyết triệt để vấn đề \"Works on my machine\". Bằng cách đóng gói Code, thư viện, và hệ điều hành base vào 1 Image duy nhất." },

    // --- TỔNG HỢP KIẾN THỨC SÂU PANDAS & THUẬT TOÁN (14 CÂU) ---
    { type: "mcq", category: "Thư viện Pandas", question: "Khi làm việc với chuỗi thời gian (Time-series), hàm <code>df.resample('M').mean()</code> có tác dụng gì?", options: ["Lọc ra tháng M trong DataFrame.", "Lấy mẫu ngẫu nhiên (random sample) các dòng với xác suất M.", "Thay đổi tần suất (Downsampling) dữ liệu thành mức Tháng (Monthly), và tính giá trị trung bình cho từng tháng.", "Đổi định dạng cột ngày tháng sang 'Month'."], correct: 2, explanation: "Resample trong chuỗi thời gian giống như Groupby theo tần suất thời gian. 'M' (hoặc 'ME' trong pandas mới) là Monthly frequency." },
    { type: "mcq", category: "Thư viện Pandas", question: "Để xóa các dòng bị trùng lặp (Duplicate rows) trong DataFrame, giữ lại lần xuất hiện ĐẦU TIÊN, ta dùng phương thức nào?", options: ["<code>df.drop_duplicates(keep='first')</code>", "<code>df.remove_duplicates(keep='first')</code>", "<code>df.distinct()</code>", "<code>df.unique(keep=1)</code>"], correct: 0, explanation: "`drop_duplicates` mặc định `keep='first'`. Rất hữu hiệu khi dọn dẹp dữ liệu Web Scraping." },
    { type: "mcq", category: "Thuật toán", question: "Độ phức tạp thời gian (Time Complexity) trung bình của thuật toán Sắp xếp nhanh (Quick Sort) là bao nhiêu?", options: ["$O(1)$", "$O(N)$", "$O(N \\log N)$", "$O(N^2)$"], correct: 2, explanation: "QuickSort sử dụng chiến lược Chia để Trị (Divide & Conquer). Trung bình mất $O(N \\log N)$ thao tác." },
    { type: "mcq", category: "Cấu trúc dữ liệu", question: "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc LIFO (Last In, First Out - Vào sau Ra trước)?", options: ["Hàng đợi (Queue)", "Ngăn xếp (Stack)", "Danh sách liên kết (Linked List)", "Cây nhị phân (Binary Tree)"], correct: 1, explanation: "Giống như xếp 1 chồng đĩa, cái đĩa để vào sau cùng sẽ được lấy ra đầu tiên. Call Stack trong lập trình cũng dùng Stack." },
    { type: "mcq", category: "Thư viện NumPy", question: "Đoạn mã sau thực hiện điều gì: <code>np.clip(arr, a_min=0, a_max=100)</code>?", options: ["Xóa các giá trị nhỏ hơn 0 và lớn hơn 100.", "Thay thế các giá trị $< 0$ bằng $0$, và các giá trị $> 100$ bằng $100$.", "Trích xuất mảng con từ vị trí index 0 đến 100.", "Nén (Compress) mảng về khoảng 0-100 bằng Min-Max Scaler."], correct: 1, explanation: "`np.clip` là hàm 'cắt ngọn'. Các giá trị vượt quá biên sẽ bị ép dẹt về bằng đúng giới hạn biên." },
    { type: "mcq", category: "Thư viện Pandas", question: "Khi cần áp dụng một hàm tùy biến phức tạp (Custom function) lên TỪNG DÒNG của DataFrame, hàm nào của Pandas là phù hợp nhất?", options: ["<code>df.apply(func, axis=1)</code>", "<code>df.applymap(func)</code>", "<code>df.map(func)</code>", "<code>df.transform_rows(func)</code>"], correct: 0, explanation: "`apply()` với `axis=1` sẽ quét qua từng hàng. Lời khuyên: Hàm này khá chậm (thực thi vòng lặp for ngầm của Python), nếu có thể hãy dùng Vectorization." },
    { type: "mcq", category: "Machine Learning (PCA)", question: "PCA (Phân tích thành phần chính) nhạy cảm với điều gì nhất trước khi huấn luyện?", options: ["Cần phải chuẩn hóa tỷ lệ (Scaling) dữ liệu.", "Cần phải cân bằng dữ liệu (SMOTE).", "Cần phải Encode toàn bộ Text.", "Cần tăng số chiều lên gấp đôi."], correct: 0, explanation: "Vì PCA dựa trên tính Phương sai lớn nhất. Nếu một feature tính bằng 'Kilomet', một feature bằng 'Milimet', biến 'Milimet' sẽ có phương sai khổng lồ và áp đảo hoàn toàn PCA. Bắt buộc phải Standard Scaler trước khi PCA." },
    { type: "essay", category: "Đại số tuyến tính (Code NumPy)", question: "Viết lệnh để tính Nghịch đảo của ma trận vuông <code>A</code> bằng NumPy.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>np.linalg.inv(A)</code>" },
    { type: "essay", category: "Đại số tuyến tính (Code NumPy)", question: "Viết lệnh tính Định thức (Determinant) của ma trận vuông <code>A</code> bằng NumPy.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>np.linalg.det(A)</code>" },
    { type: "essay", category: "Toán & Thống kê (Code NumPy)", question: "Viết lệnh tạo ra một ma trận <code>3x3</code> chứa các giá trị ngẫu nhiên tuân theo phân phối Chuẩn (Normal Distribution) với Mean=0, Std=1.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>np.random.randn(3, 3)</code><br>Hoặc: <code>np.random.normal(0, 1, (3, 3))</code>" },
    { type: "essay", category: "Toán & Thống kê (Code NumPy)", question: "Viết lệnh tính Phương sai (Variance) của mảng <code>arr</code> theo trục dọc (axis=0).", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>np.var(arr, axis=0)</code>" },
    { type: "essay", category: "Lập trình Python (Thuật toán)", question: "Bằng List Comprehension của Python, viết 1 dòng code trích xuất tất cả các số CHẴN từ list <code>numbers = [1, 2, 3, 4, 5, 6, 7, 8]</code>.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>[x for x in numbers if x % 2 == 0]</code>" },
    { type: "essay", category: "Thư viện Pandas", question: "Viết lệnh Pandas tạo một cột mới tên là <code>'Age_Group'</code>, với điều kiện: Nếu cột <code>df['Age'] >= 18</code> là 'Adult', ngược lại là 'Child'.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br>Sử dụng NumPy:<br><code>df['Age_Group'] = np.where(df['Age'] >= 18, 'Adult', 'Child')</code>" },
    { type: "essay", category: "Machine Learning (Scikit-Learn)", question: "Viết lệnh để chia tập dữ liệu <code>X, y</code> thành tập Huấn luyện (Train) 80% và tập Kiểm thử (Test) 20% bằng <code>train_test_split</code>, đồng thời khóa state ngẫu nhiên bằng 42.", options: [], correct: -1, explanation: "<b>Mã nguồn chuẩn:</b><br><code>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)</code>" }

,

    {
        "type": "mcq",
        "category": "Đại số tuyến tính (Toán học)",
        "question": "Cho 3 ma trận $A \\in \\mathbb{R}^{4 \\times 5}$, $B \\in \\mathbb{R}^{5 \\times 3}$, và $C \\in \\mathbb{R}^{3 \\times 4}$. Phép nhân ma trận $X = (A \\cdot B) \\cdot C$ sẽ trả về ma trận $X$ có kích thước (shape) là bao nhiêu?",
        "options": [
            "$4 \\times 3$",
            "$4 \\times 4$",
            "$5 \\times 4$",
            "$3 \\times 3$"
        ],
        "correct": 1,
        "explanation": "<b>Giải thích chi tiết từng bước:</b><br>\nQuy tắc nhân 2 ma trận: Nếu ma trận $M$ có kích thước $(m \\times n)$ và ma trận $N$ có kích thước $(n \\times p)$, thì phép nhân $M \\cdot N$ hợp lệ (do số cột $M$ = số hàng $N$) và trả về ma trận mới có kích thước $(m \\times p)$.<br><br>\n<b>Bước 1: Tính ma trận $Y = A \\cdot B$</b><br>\n- Ma trận $A$ có kích thước $4 \\times 5$ (4 hàng, 5 cột).<br>\n- Ma trận $B$ có kích thước $5 \\times 3$ (5 hàng, 3 cột).<br>\n-> Số cột của $A$ (5) bằng số hàng của $B$ (5). Vậy $Y = A \\cdot B$ hợp lệ.<br>\n-> Kích thước của $Y$ sẽ lấy số hàng của $A$ và số cột của $B$, tức là $4 \\times 3$.<br><br>\n<b>Bước 2: Tính ma trận $X = Y \\cdot C$</b><br>\n- Ma trận $Y$ vừa tính có kích thước $4 \\times 3$.<br>\n- Ma trận $C$ có kích thước $3 \\times 4$.<br>\n-> Số cột của $Y$ (3) bằng số hàng của $C$ (3). Vậy phép nhân hợp lệ.<br>\n-> Kích thước của $X$ sẽ lấy số hàng của $Y$ và số cột của $C$, tức là <b>$4 \\times 4$</b>.<br><br>\n=> <b>Đáp án đúng là $4 \\times 4$</b>."
    },
    {
        "type": "mcq",
        "category": "Đại số tuyến tính (Toán học)",
        "question": "Cho ma trận $A$ kích thước $(m \\times n)$ và ma trận $B$ kích thước $(p \\times q)$. Điều kiện nào sau đây bắt buộc phải thỏa mãn để phép nhân $A^T \\cdot B$ hợp lệ? ($A^T$ là ma trận chuyển vị của $A$).",
        "options": [
            "$m = p$",
            "$n = p$",
            "$m = q$",
            "$n = q$"
        ],
        "correct": 0,
        "explanation": "<b>Giải thích chi tiết:</b><br>\n<b>Bước 1: Kích thước của ma trận chuyển vị $A^T$</b><br>\n- $A$ có kích thước $(m \\times n)$. Khi chuyển vị, số hàng thành số cột và ngược lại.<br>\n-> Kích thước của $A^T$ là $(n \\times m)$.<br><br>\n<b>Bước 2: Quy tắc nhân ma trận</b><br>\n- Ta cần tính $A^T \\cdot B$.<br>\n- Ma trận thứ nhất $A^T$ có kích thước $(n \\times \\mathbf{m})$. Tức là có $m$ cột.<br>\n- Ma trận thứ hai $B$ có kích thước $(\\mathbf{p} \\times q)$. Tức là có $p$ hàng.<br>\n-> Để phép nhân hợp lệ, số cột của ma trận đứng trước phải BẰNG số hàng của ma trận đứng sau.<br>\n-> Do đó, ta bắt buộc phải có <b>$m = p$</b>.<br><br>\n=> <b>Đáp án đúng là $m = p$</b>."
    }
,

    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "In the standard Scaled Dot-Product Attention $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$, assuming the components of $Q$ and $K$ are independent random variables with mean 0 and variance 1, what is the variance of the dot product $q \\cdot k$ before scaling, and why is the scaling factor $\\frac{1}{\\sqrt{d_k}}$ necessary?",
        "options": [
            "Variance is $d_k$; scaling by $\\frac{1}{\\sqrt{d_k}}$ ensures the variance of the dot product remains $d_k$, preventing gradient explosion.",
            "Variance is $d_k$; scaling by $\\frac{1}{\\sqrt{d_k}}$ reduces the variance to 1, preventing the softmax function from entering regions with extremely small gradients.",
            "Variance is $1$; scaling by $\\frac{1}{\\sqrt{d_k}}$ is purely empirical to speed up convergence during early training steps.",
            "Variance is $d_k^2$; scaling by $\\frac{1}{\\sqrt{d_k}}$ normalizes the maximum possible value of the attention logit to 1."
        ],
        "correct": 1,
        "explanation": "If components of $q$ and $k$ have mean 0 and variance 1, their dot product $q \\cdot k = \\sum_{i=1}^{d_k} q_i k_i$ has a mean of 0 and a variance of $d_k$. Without scaling, large $d_k$ pushes the softmax function into regions where gradients are vanishingly small. Dividing by $\\sqrt{d_k}$ standardizes the variance back to 1."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "Which of the following best describes the exact mechanism by which FlashAttention achieves memory efficiency and faster training compared to standard self-attention?",
        "options": [
            "It completely eliminates the softmax operation and uses a linear approximation of attention, reducing complexity to $\\mathcal{O}(N)$.",
            "It computes the full attention matrix $QK^T$ in High Bandwidth Memory (HBM) but uses quantization (INT8) to reduce its memory footprint.",
            "It uses tiling to compute attention block-by-block in SRAM, avoiding the materialization of the large $N \\times N$ attention matrix in HBM.",
            "It downsamples the sequence length $N$ using a pooling layer before computing attention, halving the memory requirement."
        ],
        "correct": 2,
        "explanation": "FlashAttention uses tiling to load blocks of Q, K, and V from HBM to SRAM, computes attention incrementally, and writes the output back. This avoids materializing the $\\mathcal{O}(N^2)$ attention matrix in HBM, reducing memory reads/writes and significantly speeding up the process."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "During autoregressive decoding in a Transformer model, the KV-cache is used to avoid redundant computations. For a batch size of $B$, sequence length $L$, $H$ attention heads, and head dimension $d_k$, what is the total number of elements stored in the KV-cache per layer?",
        "options": [
            "$B \\times L \\times H \\times d_k$",
            "$2 \\times B \\times L \\times H \\times d_k$",
            "$B \\times L^2 \\times H \\times d_k$",
            "$2 \\times B \\times L^2 \\times H \\times d_k$"
        ],
        "correct": 1,
        "explanation": "The KV-cache stores both the Key (K) and Value (V) tensors for all previous tokens in the sequence. Each tensor has a shape of $(B, L, H, d_k)$. Since there are two tensors (K and V), the total number of elements is $2 \\times B \\times L \\times H \\times d_k$."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "In Multi-Head Attention, the model splits the embedding dimension $d_{model}$ into $H$ heads, such that $d_k = d_{model} / H$. What is the primary representational advantage of this approach over using a Single-Head Attention with the full dimension $d_{model}$?",
        "options": [
            "It reduces the overall computational complexity from $\\mathcal{O}(N^2 \\cdot d_{model})$ to $\\mathcal{O}(N^2 \\cdot d_{model} / H)$.",
            "It allows the model to jointly attend to information from different representation subspaces at different positions.",
            "It prevents the attention matrix from becoming singular, ensuring stable gradients during backpropagation.",
            "It mathematically guarantees that the attention weights form a symmetric matrix."
        ],
        "correct": 1,
        "explanation": "Multi-Head Attention allows the model to project queries, keys, and values into $H$ different representation subspaces. This enables the model to simultaneously focus on different types of relationships (e.g., syntactic vs. semantic) between tokens at different positions, which a single head might average out."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "Which of the following statements correctly distinguishes Rotary Positional Embedding (RoPE) from absolute sinusoidal positional encodings?",
        "options": [
            "RoPE adds the positional information directly to the input embeddings before the first Transformer layer.",
            "RoPE encodes absolute position by concatenating a one-hot vector to the input tokens.",
            "RoPE injects positional information at every layer by applying a rotation matrix to the queries and keys, ensuring the inner product depends only on their relative distance.",
            "RoPE eliminates the need for any positional encoding by relying solely on causal masking."
        ],
        "correct": 2,
        "explanation": "RoPE works by multiplying the query and key vectors by a rotation matrix that depends on their absolute position. A key mathematical property of this rotation is that the inner product of a rotated query and a rotated key depends only on their relative position distance, effectively incorporating relative positional information at every layer."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "In a standard Transformer decoder, causal masking is applied to the self-attention mechanism. How is this mask mathematically applied before the softmax function?",
        "options": [
            "By multiplying the upper triangular elements of the attention matrix $QK^T$ by 0.",
            "By subtracting 1 from the upper triangular elements of the attention matrix $QK^T$.",
            "By setting the upper triangular elements (where $j > i$) of the attention matrix $QK^T$ to $-\\infty$.",
            "By setting the lower triangular elements (where $j < i$) of the attention matrix $QK^T$ to $-\\infty$."
        ],
        "correct": 2,
        "explanation": "To prevent future tokens from influencing the current token prediction (causality), the upper triangular elements of the unnormalized attention scores $QK^T$ (where key position $j$ is strictly greater than query position $i$) are set to $-\\infty$. When softmax is applied, $e^{-\\infty}$ becomes exactly 0."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "For a very long sequence length $N$ in a standard Transformer, which operation dominates the computational complexity of a single layer?",
        "options": [
            "The Multi-Layer Perceptron (FFN) computation, which is $\\mathcal{O}(N \\cdot d_{model}^2)$.",
            "The self-attention matrix multiplication $QK^T$ and softmax, which are $\\mathcal{O}(N^2 \\cdot d_{model})$.",
            "The layer normalization, which is $\\mathcal{O}(N \\cdot d_{model})$.",
            "The linear projections for Q, K, and V, which are $\\mathcal{O}(N \\cdot d_{model}^2)$."
        ],
        "correct": 1,
        "explanation": "While FFN complexity $\\mathcal{O}(N \\cdot d_{model}^2)$ scales linearly with $N$, the attention mechanism computes pairwise dot products for all $N$ tokens, scaling quadratically $\\mathcal{O}(N^2 \\cdot d_{model})$. For very large $N$, the $N^2$ term dominates the overall compute and memory requirements."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "Many modern LLMs replace the standard ReLU activation in the Feed-Forward Network with SwiGLU. What is the mathematical definition of the SwiGLU activation for an input $x$ and weight matrices $W_1, W_2$?",
        "options": [
            "$\\text{SwiGLU}(x) = \\max(0, x W_1) \\cdot (x W_2)$",
            "$\\text{SwiGLU}(x) = (x W_1) \\odot \\sigma(x W_2)$",
            "$\\text{SwiGLU}(x) = \\text{Swish}(x W_1) \\odot (x W_2)$",
            "$\\text{SwiGLU}(x) = \\tanh(x W_1) \\odot (x W_2)$"
        ],
        "correct": 2,
        "explanation": "SwiGLU (Swish Gated Linear Unit) is defined as $\\text{Swish}(x W_1) \\odot (x W_2)$, where $\\text{Swish}(z) = z \\cdot \\sigma(z)$. It introduces a multiplicative gating mechanism that has been empirically shown to yield better performance and training stability in large language models."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "Which of the following mechanisms describes ALiBi (Attention with Linear Biases) for positional encoding?",
        "options": [
            "It adds a learned sinusoidal vector to the input embeddings.",
            "It subtracts a constant bias proportional to the distance between the query and key directly from the attention scores before softmax.",
            "It uses a convolutional layer to extract local positional features before self-attention.",
            "It rotates the keys and queries in the complex plane proportional to their positions."
        ],
        "correct": 1,
        "explanation": "ALiBi completely removes positional embeddings from the input. Instead, it biases the attention scores $q_i \\cdot k_j$ by subtracting a penalty $m \\cdot |i - j|$, where $m$ is a head-specific scalar. This linear penalty smoothly decays attention for distant tokens and enables excellent zero-shot length extrapolation."
    },
    {
        "type": "mcq",
        "category": "Transformer & Self-attention",
        "question": "In a Sparse Mixture of Experts (MoE) Transformer layer, how does the routing mechanism affect the computational complexity during inference for a single token?",
        "options": [
            "It increases the compute per token because the token must be processed by all experts.",
            "It decreases the overall parameter count of the model while maintaining compute.",
            "It keeps the active parameters and compute per token roughly constant while drastically increasing the total parameter capacity of the model.",
            "It forces the model to use dynamic sequence lengths, reducing $N$ for the attention computation."
        ],
        "correct": 2,
        "explanation": "In an MoE model, a routing network selects only a small subset of experts (e.g., top-2 out of 8) to process each token. This decouples the model's total parameter count (which becomes very large) from the active parameters used per token (which remains comparable to a dense model), allowing massive capacity scaling without a proportional compute penalty."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "In a standard LSTM cell, the cell state $C_t$ is updated using the forget gate $f_t$, the input gate $i_t$, the previous cell state $C_{t-1}$, and the candidate cell state $\\tilde{C}_t$. Which of the following is the correct mathematical formula for this update?",
        "options": [
            "$C_t = f_t \\odot \\tilde{C}_t + i_t \\odot C_{t-1}$",
            "$C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$",
            "$C_t = \\tanh(f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t)$",
            "$C_t = \\sigma(f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t)$"
        ],
        "correct": 1,
        "explanation": "The correct update equation for the LSTM cell state is $C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$. The forget gate $f_t$ dictates what to discard from the previous state, while the input gate $i_t$ scales the new candidate information $\\tilde{C}_t$ to be added."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "Standard Recurrent Neural Networks (RNNs) suffer from the vanishing gradient problem primarily because:",
        "options": [
            "The loss function is strictly convex, causing gradients to plateau early.",
            "Backpropagation Through Time (BPTT) involves repeated multiplication of the same recurrent weight matrix, leading to exponentially decaying gradients if the matrix's eigenvalues are less than 1.",
            "The input sequences contain too much zero-padding, which zeros out the gradients.",
            "The softmax activation at the output layer heavily penalizes long sequences."
        ],
        "correct": 1,
        "explanation": "In standard RNNs, computing gradients with respect to early time steps involves multiplying the recurrent weight matrix $W_h$ repeatedly. If the dominant eigenvalue of $W_h$ is $< 1$, these repeated multiplications cause the gradients to vanish exponentially."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "A well-known best practice when initializing an LSTM network is to set the bias of the forget gate $f_t = \\sigma(W_f x_t + U_f h_{t-1} + b_f)$ to a positive value (e.g., $1.0$). What is the primary reason for this?",
        "options": [
            "To encourage the LSTM to forget most of the past information early in training, focusing only on the current input.",
            "To shift the sigmoid activation function to a linear regime, avoiding saturation.",
            "To initialize the forget gate outputs close to 1, ensuring that the cell state gradient flows smoothly backward in time at the beginning of training.",
            "To strictly prevent the cell state $C_t$ from exceeding 1.0."
        ],
        "correct": 2,
        "explanation": "Initializing the forget gate bias to a positive value (like 1.0) makes the sigmoid output close to 1. This means the cell state $C_t$ largely copies $C_{t-1}$ at initialization, creating a near-identity mapping that allows gradients to flow effectively across many time steps during early training."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "In the context of Truncated Backpropagation Through Time (BPTT) for training RNNs on very long sequences, what is the main trade-off of using a small truncation length $k_{trunc}$?",
        "options": [
            "It decreases memory usage but prevents the network from learning dependencies that span longer than $k_{trunc}$ steps.",
            "It increases memory usage but allows the network to learn infinite-range dependencies.",
            "It strictly increases training time due to frequent weight updates.",
            "It causes the forward pass to be truncated, resulting in loss of sequence output."
        ],
        "correct": 0,
        "explanation": "Truncated BPTT splits a long sequence into chunks of length $k_{trunc}$ and only backpropagates errors for $k_{trunc}$ steps. While this bounds memory and compute, it inherently prevents the gradient from flowing back beyond $k_{trunc}$ steps, making it impossible to learn dependencies longer than that."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "How does a Gated Recurrent Unit (GRU) fundamentally differ from an LSTM in terms of its gating mechanism?",
        "options": [
            "A GRU has a separate memory cell state $C_t$ and hidden state $h_t$, while an LSTM merges them.",
            "A GRU couples the forget and input gates into a single update gate $z_t$, such that the previous state is scaled by $(1 - z_t)$ and the new candidate state by $z_t$.",
            "A GRU uses ReLU activations for its gates instead of Sigmoid.",
            "A GRU adds an explicit output gate to control the visibility of the cell state."
        ],
        "correct": 1,
        "explanation": "Unlike the LSTM which has independent input and forget gates, the GRU uses a single update gate $z_t$. The hidden state update is $h_t = (1 - z_t) \\odot h_{t-1} + z_t \\odot \\tilde{h}_t$. This reduces the number of parameters and simplifies the architecture while retaining similar performance."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "What is the specific architectural modification introduced in 'Peephole' LSTMs compared to standard LSTMs?",
        "options": [
            "The gates ($i_t, f_t, o_t$) receive the previous cell state $C_{t-1}$ as an additional input, allowing them to inspect the internal memory before gating.",
            "The cell state $C_t$ is bypassed entirely during the forward pass.",
            "The input $x_t$ is fed directly to the output gate without passing through the hidden state.",
            "The hidden state $h_{t-1}$ is removed from the gate computations."
        ],
        "correct": 0,
        "explanation": "In standard LSTMs, gates are controlled only by $x_t$ and $h_{t-1}$. Peephole connections allow the gates to also 'look' at the cell state $C_{t-1}$ (and $C_t$ for the output gate), incorporating $W_c \\odot C_{t-1}$ into the gate activations. This allows precise timing and counting behaviors."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "Which specific property of the LSTM's cell state $C_t$ update mechanism is primarily responsible for mitigating the vanishing gradient problem?",
        "options": [
            "The use of the $\\tanh$ activation function on the cell state.",
            "The additive nature of the update $C_t = f_t \\odot C_{t-1} + \\dots$, which allows gradients to flow linearly without matrix multiplication when $f_t \\approx 1$.",
            "The strict orthogonal initialization of the recurrent weight matrices.",
            "The division of the cell state by the sequence length $T$ at each step."
        ],
        "correct": 1,
        "explanation": "The core innovation of the LSTM is the additive linear path for $C_t$. The derivative of $C_t$ with respect to $C_{t-1}$ includes the term $f_t$. If the network learns to set the forget gate $f_t \\approx 1$, the gradient passes back perfectly without decaying, completely bypassing the multiplicative decay of standard RNNs."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "In a Bidirectional RNN, if the forward RNN has hidden state dimension $D_h$ and the backward RNN has hidden state dimension $D_h$, what is the typical dimensionality of the combined hidden state representation for a single time step $t$?",
        "options": [
            "$D_h$, because the forward and backward states are averaged.",
            "$2 \\times D_h$, because the forward state $\\overrightarrow{h}_t$ and backward state $\\overleftarrow{h}_t$ are concatenated.",
            "$D_h^2$, because they are combined via an outer product.",
            "$\\sqrt{D_h}$, to maintain normalized variance."
        ],
        "correct": 1,
        "explanation": "In Bidirectional RNNs, the standard approach is to concatenate the forward hidden state and the backward hidden state at each time step. This yields a combined representation of size $2 \\times D_h$ that encapsulates both past and future context."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "When training an RNN for sequence generation using 'Teacher Forcing', the network is fed the ground-truth previous token instead of its own prediction. What well-known issue arises from this during inference?",
        "options": [
            "Catastrophic forgetting.",
            "Exposure Bias, where the model struggles at inference time because it has never been exposed to its own accumulated prediction errors.",
            "Gradient Explosion, caused by the sudden shift in input distribution.",
            "Mode Collapse, where the RNN outputs the exact same sequence regardless of input."
        ],
        "correct": 1,
        "explanation": "Teacher forcing trains the model using perfect past tokens. During inference, the model must feed its own (potentially flawed) predictions back as input. Because it was never trained to recover from its own mistakes, errors compound rapidly. This discrepancy between training and inference is called Exposure Bias."
    },
    {
        "type": "mcq",
        "category": "RNN & LSTM cell",
        "question": "In a GRU, what is the role of the reset gate $r_t$?",
        "options": [
            "It determines how much of the new input $x_t$ should be ignored.",
            "It determines how much of the previous hidden state $h_{t-1}$ should be incorporated into the calculation of the new candidate hidden state $\\tilde{h}_t$.",
            "It forces the hidden state to zero if the sequence reaches an EOS (End of Sequence) token.",
            "It scales the output logits before the softmax layer."
        ],
        "correct": 1,
        "explanation": "The reset gate $r_t$ in a GRU is used to compute the candidate hidden state: $\\tilde{h}_t = \\tanh(W x_t + U (r_t \\odot h_{t-1}))$. It effectively allows the model to drop previous state information when computing the new candidate state, acting as a short-term memory reset mechanism."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "Given a 1D convolution with kernel size $K$ and dilation rate $D$, what is the effective kernel size $K_{eff}$, which represents the receptive field of a single convolutional filter?",
        "options": [
            "$K_{eff} = K \\times D$",
            "$K_{eff} = K + D - 1$",
            "$K_{eff} = K + (K - 1)(D - 1)$",
            "$K_{eff} = K^D$"
        ],
        "correct": 2,
        "explanation": "Dilation inserts $D-1$ spaces between kernel elements. For a kernel of size $K$, there are $K-1$ gaps. The total size spans the $K$ elements plus the $(K-1)(D-1)$ spaces, yielding $K_{eff} = K + (K - 1)(D - 1)$."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "A standard 2D convolution layer has input channels $C_{in}$, output channels $C_{out}$, and a kernel size of $K \\times K$. If this is replaced by a Depthwise Separable Convolution, what is the formula for the number of parameters (ignoring bias)?",
        "options": [
            "$K^2 \\cdot C_{in} \\cdot C_{out}$",
            "$K^2 \\cdot C_{in} + C_{in} \\cdot C_{out}$",
            "$K^2 \\cdot C_{out} + C_{in} \\cdot C_{out}$",
            "$(K^2 + C_{in}) \\cdot C_{out}$"
        ],
        "correct": 1,
        "explanation": "Depthwise Separable Convolution splits the operation into two steps: a depthwise spatial convolution ($K \\times K \\times C_{in}$ parameters, applying one filter per input channel) and a pointwise $1 \\times 1$ convolution ($1 \\times 1 \\times C_{in} \\times C_{out}$ parameters) to combine channels. Total parameters: $K^2 \\cdot C_{in} + C_{in} \\cdot C_{out}$."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "What is the primary architectural purpose of a $1 \\times 1$ convolution layer in networks like Inception or ResNet?",
        "options": [
            "To increase the spatial receptive field of the network without adding large kernels.",
            "To perform spatial pooling and reduce the spatial dimensions (width and height) of the feature map.",
            "To perform channel-wise pooling or dimensionality reduction/expansion across the depth of the feature map while leaving spatial dimensions unchanged.",
            "To introduce non-linearities strictly in the spatial domain."
        ],
        "correct": 2,
        "explanation": "A $1 \\times 1$ convolution acts as a pixel-wise fully connected layer across channels. It computes linear combinations of the input channels, allowing the network to reduce (or increase) the number of channels ($C_{out}$ < $C_{in}$) without altering the spatial dimensions ($H \\times W$)."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "How does Batch Normalization behave differently during model inference (evaluation) compared to training?",
        "options": [
            "During inference, it computes the mean and variance of the current test batch to normalize the data.",
            "During inference, it uses exponential moving averages of the mean and variance computed during training, rather than the statistics of the test batch.",
            "During inference, the scale ($\\gamma$) and shift ($\\beta$) parameters are ignored to speed up computation.",
            "Batch Normalization is entirely bypassed during inference."
        ],
        "correct": 1,
        "explanation": "During training, BN normalizes using the mean and variance of the current mini-batch. To ensure deterministic predictions for single samples during inference, BN uses the fixed, pre-computed running mean and running variance tracked during the training phase."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "A standard Convolutional Neural Network (without fully connected layers) is mathematically said to be:",
        "options": [
            "Equivariant to translation, meaning a shift in the input image results in an equivalent shift in the output feature map.",
            "Invariant to translation, meaning a shift in the input image results in exactly the same output feature map without any shift.",
            "Equivariant to rotation, meaning rotating the input perfectly rotates the output features.",
            "Invariant to scale, meaning scaling the input image does not change the feature map values."
        ],
        "correct": 0,
        "explanation": "Convolution operations are translationally equivariant. If you shift the input image by 1 pixel, the resulting feature map is also shifted by 1 pixel (accounting for stride). Global pooling at the end of the network is what ultimately creates translation invariance for classification."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "When using Transposed Convolutions (often called Deconvolutions) for upsampling in generative models, 'checkerboard artifacts' frequently appear in the output. What is the primary cause of these artifacts?",
        "options": [
            "The use of ReLU activation which zeros out negative pixels in a checkerboard pattern.",
            "Uneven overlap of the convolutional kernel when the kernel size is not divisible by the stride.",
            "Gradient explosion during backpropagation in the transposed layer.",
            "The spectral norm of the weight matrix exceeding 1."
        ],
        "correct": 1,
        "explanation": "Transposed convolutions paint the kernel onto the output. If the kernel size is not a multiple of the stride, the overlap of the kernels on the output pixels is uneven. Some pixels receive contributions from more kernel applications than others, creating a regular checkerboard pattern of varying magnitudes."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "In a Grouped Convolution (as used in ResNeXt), the input channels $C_{in}$ and output channels $C_{out}$ are divided into $G$ independent groups. By what factor are the parameters of the convolutional layer reduced compared to a standard convolution?",
        "options": [
            "Reduced by a factor of $G$.",
            "Reduced by a factor of $G^2$.",
            "Reduced by a factor of $\\sqrt{G}$.",
            "The parameters remain exactly the same, only computation is reduced."
        ],
        "correct": 0,
        "explanation": "In a standard conv, parameters are $K^2 \\cdot C_{in} \\cdot C_{out}$. In grouped conv, each group takes $C_{in}/G$ channels and outputs $C_{out}/G$ channels. Parameters per group: $K^2 (C_{in}/G) (C_{out}/G)$. Total for $G$ groups: $G \\cdot K^2 (C_{in}/G) (C_{out}/G) = \frac{K^2 C_{in} C_{out}}{G}$. The parameters are reduced by a factor of $G$."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "Modern CNN architectures (like ResNet) replace the traditional dense layers at the end of the network with Global Average Pooling (GAP). What is the primary advantage of GAP over flattening and using a dense layer?",
        "options": [
            "GAP significantly increases model capacity to learn complex decision boundaries.",
            "GAP allows the network to process inputs of any arbitrary spatial dimension without changing the parameter count.",
            "GAP acts as a spatial attention mechanism.",
            "GAP converts the feature map to a completely sparse representation."
        ],
        "correct": 1,
        "explanation": "Flattening a spatial feature map of size $H \\times W \\times C$ into a dense layer requires weights dependent on $H$ and $W$. GAP averages each $H \\times W$ feature map into a single scalar, yielding a vector of length $C$ regardless of the input image size. This removes the dependency on input resolution and drastically reduces parameters, preventing overfitting."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "Consider a CNN with two sequential convolutional layers. Layer 1 has kernel size $K_1$ and stride $S_1=1$. Layer 2 has kernel size $K_2$ and stride $S_2=1$. What is the total receptive field of a single neuron in the output of Layer 2 with respect to the original input?",
        "options": [
            "$K_1 \\times K_2$",
            "$K_1 + K_2 - 1$",
            "$K_1 + K_2 + 1$",
            "$\\max(K_1, K_2)$"
        ],
        "correct": 1,
        "explanation": "A neuron in Layer 2 sees a $K_2 \times K_2$ region of Layer 1. Each neuron in Layer 1 sees a $K_1 \times K_1$ region of the input. Because the stride is 1, the span on the original input is $K_2$ pixels, plus the $(K_1 - 1)$ extra pixels seen by the edges of the $K_2$ region. Total receptive field is $K_1 + K_2 - 1$."
    },
    {
        "type": "mcq",
        "category": "CNN & General Deep Learning",
        "question": "In the training of Generative Adversarial Networks (GANs), Spectral Normalization is often applied to the discriminator's layers. What mathematical property does Spectral Normalization strictly enforce?",
        "options": [
            "It enforces the weight matrices to be perfectly orthogonal, meaning $W^T W = I$.",
            "It restricts the Lipschitz constant of the layer to be $\\le 1$ by dividing the weight matrix by its largest singular value.",
            "It normalizes the variance of the gradients during backpropagation to exactly 1.",
            "It ensures that the output feature maps have zero mean and unit variance."
        ],
        "correct": 1,
        "explanation": "Spectral Normalization computes the spectral norm (the largest singular value, often approximated using power iteration) of the weight matrix and divides the matrix by this value. This ensures the weight matrix has a spectral norm of 1, bounding the Lipschitz constant of the network, which is crucial for the stability of Wasserstein GANs."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "In the context of machine learning monitoring, which of the following scenarios strictly defines 'Concept Drift' as opposed to 'Data Drift' (Covariate Shift)?",
        "options": [
            "The distribution of the input features $P(X)$ changes significantly over time, but the mapping $P(Y|X)$ remains constant.",
            "The conditional probability of the target given the features $P(Y|X)$ changes over time, meaning the fundamental relationship between input and output has shifted.",
            "The proportion of missing values in a critical feature suddenly spikes due to a broken sensor.",
            "The model's inference latency increases due to an underlying infrastructure degradation."
        ],
        "correct": 1,
        "explanation": "Data drift (or covariate shift) occurs when the input distribution $P(X)$ changes. Concept drift occurs when the ground-truth relationship between features and the target variable $P(Y|X)$ changes (e.g., what was considered a 'fraudulent' pattern last year is now considered 'normal' behavior)."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "When monitoring for data drift, the Population Stability Index (PSI) is a widely used metric. How is PSI computationally related to Kullback-Leibler (KL) Divergence for two distributions, Reference (R) and Current (C)?",
        "options": [
            "PSI is exactly the KL divergence $D_{KL}(C || R)$.",
            "PSI is the symmetric sum of KL divergences: $D_{KL}(C || R) + D_{KL}(R || C)$.",
            "PSI is the square root of the KL divergence.",
            "PSI is unrelated to KL divergence; it is purely based on the Kolmogorov-Smirnov test."
        ],
        "correct": 1,
        "explanation": "PSI is calculated as $\\sum (C_i - R_i) \\ln(C_i / R_i)$. This can be rewritten as $\\sum C_i \\ln(C_i / R_i) + \\sum R_i \\ln(R_i / C_i)$, which is exactly $D_{KL}(C || R) + D_{KL}(R || C)$. It provides a symmetric measure of difference between the reference and current distributions."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "Adversarial Validation is a technique used to detect if a test dataset is drawn from the same distribution as the training dataset. How is this technique implemented?",
        "options": [
            "By adding Gaussian noise to the test set and measuring the drop in model accuracy.",
            "By training a binary classifier to predict whether a given sample belongs to the training set or the test set.",
            "By using a Generative Adversarial Network (GAN) to generate synthetic test data and comparing it.",
            "By measuring the adversarial robustness of the model using Fast Gradient Sign Method (FGSM)."
        ],
        "correct": 1,
        "explanation": "Adversarial Validation involves concatenating the train and test features, assigning a label of 0 to train and 1 to test, and training a classifier (e.g., Random Forest/XGBoost). If the classifier achieves a high ROC-AUC (e.g., > 0.7), the distributions are easily distinguishable, indicating significant covariate shift/data drift."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "Which type of drift describes a scenario where the distribution of the target variable $P(Y)$ changes, but the relationship $P(X|Y)$ remains exactly the same?",
        "options": [
            "Covariate Shift",
            "Concept Drift",
            "Prior Probability Shift",
            "Domain Shift"
        ],
        "correct": 2,
        "explanation": "Prior Probability Shift (also known as Label Shift) occurs when the base rate of the target labels $P(Y)$ changes (e.g., a disease becomes much more common), but the distribution of features for a given class $P(X|Y)$ remains unchanged."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "A sudden, structural change in the data generating process (e.g., a new government regulation instantly changing consumer behavior) is classified as which type of concept drift?",
        "options": [
            "Gradual Drift",
            "Incremental Drift",
            "Sudden Drift",
            "Recurring Drift"
        ],
        "correct": 2,
        "explanation": "Sudden drift (or Abrupt drift) happens when the underlying concept changes completely and instantaneously, unlike gradual drift where the old and new concepts overlap for a period, or incremental drift where the concept slowly morphs over time."
    },
    {
        "type": "mcq",
        "category": "MLOps & Data Drift",
        "question": "When adapting to continuous Concept Drift, what is a primary limitation of using a simple Sliding Window technique to retrain the model?",
        "options": [
            "It requires storing the entire historical dataset in memory.",
            "It struggles to remember seasonal or recurring patterns because older data is strictly discarded.",
            "It causes the model to converge to a trivial solution (predicting the majority class).",
            "It mathematically guarantees catastrophic forgetting of the latest batch."
        ],
        "correct": 1,
        "explanation": "A sliding window strictly trains on the most recent $N$ samples and discards everything older. If the data has recurring drift (e.g., seasonal changes where summer patterns repeat every year), the sliding window will completely forget the summer pattern by the time winter ends."
    },
    {
        "type": "mcq",
        "category": "Docker",
        "question": "In a Dockerfile, both `ENTRYPOINT` and `CMD` can be used to specify the command to run when the container starts. If a Dockerfile specifies `ENTRYPOINT [\"python\", \"app.py\"]` and the user runs `docker run my-image --port 8080`, what is the exact command executed inside the container?",
        "options": [
            "`python app.py` (the `--port 8080` is ignored)",
            "`--port 8080` (overriding the ENTRYPOINT entirely)",
            "`python app.py --port 8080`",
            "The container crashes with a syntax error."
        ],
        "correct": 2,
        "explanation": "When `ENTRYPOINT` is defined using the exec form (JSON array), any arguments passed to `docker run` on the command line are appended as arguments to the `ENTRYPOINT` executable. Thus, it runs `python app.py --port 8080`."
    },
    {
        "type": "mcq",
        "category": "Docker",
        "question": "To optimize Docker build times using layer caching for a Python application, what is the best practice for ordering the `COPY` and `RUN` commands in the Dockerfile?",
        "options": [
            "Copy all files (`COPY . .`), then run `pip install -r requirements.txt`.",
            "Copy `requirements.txt`, run `pip install -r requirements.txt`, then copy the rest of the application code (`COPY . .`).",
            "Run `pip install -r requirements.txt` before copying any files.",
            "Combine copying and installing into a single layer: `RUN copy . . && pip install -r requirements.txt`"
        ],
        "correct": 1,
        "explanation": "Docker caches layers sequentially. If `COPY . .` is executed first, any change to any file in the repo invalidates the cache for all subsequent layers, forcing `pip install` to rerun. By copying only `requirements.txt` and installing dependencies first, the heavy `pip install` layer remains cached unless the requirements file itself changes."
    },
    {
        "type": "mcq",
        "category": "Docker",
        "question": "What is the primary benefit of using a Multi-Stage Build in Docker when containerizing a compiled application (e.g., Go, C++, or a heavy ML pipeline)?",
        "options": [
            "It allows a single container to run multiple independent operating systems simultaneously.",
            "It separates the build environment (containing compilers/toolchains) from the final runtime image, resulting in a drastically smaller and more secure final image.",
            "It enables Docker to utilize multiple CPU cores during the image build process.",
            "It automatically load-balances traffic across multiple running instances of the image."
        ],
        "correct": 1,
        "explanation": "Multi-stage builds allow you to use a heavy base image with compilers and headers to build the binary, and then copy ONLY the compiled artifact into a fresh, minimal runtime image (like Alpine or distroless). This keeps the final image size very small and reduces the attack surface."
    },
    {
        "type": "mcq",
        "category": "Docker",
        "question": "When attaching storage to a Docker container, what is the core architectural difference between a 'Bind Mount' and a 'Docker Volume'?",
        "options": [
            "A Bind Mount maps a specific file or directory from the host OS directly into the container, whereas a Docker Volume is fully managed by Docker and abstracted away from the host's standard filesystem.",
            "A Docker Volume is strictly read-only, whereas a Bind Mount allows read/write access.",
            "A Bind Mount stores data in RAM, whereas a Docker Volume stores data on the physical disk.",
            "There is no difference; they are synonymous terms in the Docker ecosystem."
        ],
        "correct": 0,
        "explanation": "Bind mounts depend on the directory structure of the host machine (e.g., `/home/user/data:/app/data`), which can cause portability issues across different OSs. Docker Volumes are managed entirely by Docker (`/var/lib/docker/volumes/`), are easier to back up, and are completely decoupled from the host's specific directory layout."
    },
    {
        "type": "mcq",
        "category": "Docker",
        "question": "What critical security vulnerability is mitigated by running the Docker daemon in 'Rootless mode'?",
        "options": [
            "It prevents containers from communicating over the public internet.",
            "It ensures that if an attacker breaks out of the container, they only gain privileges of an unprivileged user on the host, rather than full root access.",
            "It encrypts the Docker images at rest on the disk.",
            "It blocks the container from consuming more than 1GB of RAM."
        ],
        "correct": 1,
        "explanation": "By default, the Docker daemon runs as the host's root user. If an attacker exploits a container breakout vulnerability, they gain root access to the entire host machine. Rootless mode executes the Docker daemon and containers within a user namespace, mapping the container's root user to an unprivileged user on the host."
    },
    {
        "type": "mcq",
        "category": "Model Deployment",
        "question": "In Triton Inference Server, the 'Dynamic Batching' feature is configured with a parameter `max_queue_delay_microseconds`. What is the fundamental trade-off governed by increasing this parameter?",
        "options": [
            "It increases model accuracy at the cost of higher CPU memory consumption.",
            "It increases the likelihood of forming larger batches (improving overall throughput) at the cost of higher latency for individual requests.",
            "It prioritizes real-time latency for individual requests by immediately executing them, completely disabling batching.",
            "It shifts computation from the GPU to the CPU to save power."
        ],
        "correct": 1,
        "explanation": "Dynamic batching waits up to `max_queue_delay` to combine multiple independent incoming requests into a single larger batch for GPU execution. A larger delay allows bigger batches to form, maximizing GPU utilization (throughput), but means the first request in the queue waits longer before execution begins (higher latency)."
    },
    {
        "type": "mcq",
        "category": "Model Deployment",
        "question": "When performing Post-Training Quantization (PTQ) to convert an FP32 model to INT8, a 'Calibration Dataset' is often required. What is the specific mathematical purpose of this calibration step?",
        "options": [
            "To fine-tune the model's weights using backpropagation to recover accuracy lost during quantization.",
            "To determine the dynamic ranges (min and max values) of the activations at each layer, allowing the calculation of optimal scale and zero-point factors for the INT8 mapping.",
            "To convert the model architecture to support sparse matrix multiplication.",
            "To automatically prune the network of weights that are exactly zero."
        ],
        "correct": 1,
        "explanation": "In PTQ, the network's weights are static, but the activations vary based on the input. To properly map the continuous FP32 activations to discrete INT8 values without massive overflow/underflow, the calibration dataset is passed through the model to observe the distribution of activations and calculate optimal quantization scales."
    },
    {
        "type": "mcq",
        "category": "Model Deployment",
        "question": "In a robust MLOps deployment pipeline, what is the defining characteristic of a 'Shadow Deployment' (Dark Launching) strategy?",
        "options": [
            "The new model gradually receives 5%, then 10%, then 100% of live traffic, while the old model scales down.",
            "The new model receives a copy of the live production traffic, makes predictions, and logs them, but its predictions are NOT returned to the end user.",
            "The new model replaces the old model instantly across all servers to test for catastrophic failure.",
            "The new model is deployed in a purely offline environment without access to real-time data streams."
        ],
        "correct": 1,
        "explanation": "In a Shadow deployment, the new model processes real production traffic in parallel with the current primary model. The primary model serves the user response, while the shadow model's outputs are only logged for analysis. This allows safe evaluation of the new model's performance and latency on real data with zero risk to the user experience."
    },
    {
        "type": "mcq",
        "category": "Model Deployment",
        "question": "When converting a PyTorch model to ONNX, tools like ONNX Runtime often apply 'Operator Fusion'. Which of the following is a classic example of Operator Fusion used to accelerate inference?",
        "options": [
            "Replacing a 64-bit float tensor with a 16-bit float tensor.",
            "Splitting a large matrix multiplication across multiple GPUs.",
            "Combining a Convolution layer, followed by Batch Normalization, followed by a ReLU activation into a single optimized mathematical kernel.",
            "Removing all dropout layers from the computational graph."
        ],
        "correct": 2,
        "explanation": "Operator fusion combines multiple sequential operations in the computational graph into a single executable kernel. For example, Conv + BatchNorm + ReLU can be fused. This drastically reduces the overhead of launching multiple kernels on the GPU and prevents unnecessary read/write operations to the global memory."
    },
    {
        "type": "mcq",
        "category": "Data Leakage",
        "question": "A data scientist applies Target Encoding to a categorical feature using the mean of the target variable for each category. They perform this encoding on the entire dataset BEFORE splitting the data into training and cross-validation folds. Why is this a severe methodological error?",
        "options": [
            "It causes the model to underfit because the categories lose their variance.",
            "It introduces Data Leakage, as the validation folds' target values are implicitly included in the encoded features used to train the model.",
            "It converts a categorical feature into a continuous feature, which breaks tree-based algorithms.",
            "It creates infinite values if a category only appears once in the dataset."
        ],
        "correct": 1,
        "explanation": "If target encoding is applied to the full dataset before splitting, the calculated mean for a category includes the targets of the validation set. When the model trains on the training fold, it is indirectly 'seeing' the target values of the validation fold through the encoded feature, leading to artificially inflated validation performance (Data Leakage)."
    },
    {
        "type": "mcq",
        "category": "Data Leakage",
        "question": "When training a model for time-series forecasting (e.g., predicting stock prices), which cross-validation strategy explicitly prevents the data leakage known as 'Look-Ahead Bias'?",
        "options": [
            "Standard K-Fold Cross Validation.",
            "Leave-One-Out Cross Validation (LOOCV).",
            "Time Series Split (Walk-Forward Validation), where the validation set always strictly follows the training set chronologically.",
            "Stratified K-Fold Cross Validation."
        ],
        "correct": 2,
        "explanation": "Standard random splitting (like K-Fold) mixes past and future data. If a model is trained on future data and validated on past data, it is a form of leakage (Look-Ahead Bias) because the future inherently contains information about the past. Walk-Forward Validation ensures the model only ever trains on data prior to the validation period."
    },
    {
        "type": "mcq",
        "category": "Data Leakage",
        "question": "To handle a highly imbalanced dataset, a practitioner uses SMOTE (Synthetic Minority Over-sampling Technique). They apply SMOTE to the entire dataset to balance the classes, and then perform an 80/20 train/test split. What is the consequence of this workflow?",
        "options": [
            "The model will fail to compile due to duplicate rows.",
            "Data Leakage occurs because synthetic samples generated by interpolating between data points may cross the train/test boundary, causing near-identical samples to appear in both sets.",
            "The test set accuracy will be artificially low because the test set is no longer representative.",
            "There is no consequence; this is the standard correct procedure for handling imbalance."
        ],
        "correct": 1,
        "explanation": "Applying SMOTE before the split means synthetic data points are generated using the entire distribution. A synthetic point might be created based on neighbors where one neighbor ends up in the train set and one in the test set. The synthetic point (highly correlated with the test point) might end up in the train set, leading to data leakage and over-optimistic evaluation."
    },
    {
        "type": "mcq",
        "category": "AI Ethics",
        "question": "In the context of machine learning privacy, what mathematical guarantee does $(\\epsilon, \\delta)$-Differential Privacy provide?",
        "options": [
            "It guarantees that an attacker cannot determine the exact value of any feature with probability greater than $\\delta$.",
            "It ensures that the output distribution of the algorithm changes by at most a multiplicative factor of $e^{\\epsilon}$ plus an additive probability $\\delta$, whether a specific individual's record is included in the dataset or not.",
            "It encrypts the dataset such that decrypting it requires $\\mathcal{O}(2^\\epsilon)$ operations.",
            "It guarantees that the model's accuracy on minority groups will not deviate by more than $\\epsilon$ from the majority group."
        ],
        "correct": 1,
        "explanation": "Differential privacy provides a formal guarantee that the presence or absence of any single individual's data in the training set does not significantly affect the algorithm's output. The parameter $\\epsilon$ bounds the multiplicative difference in probabilities, while $\\delta$ allows for a small probability of failure of the pure $\\epsilon$-DP bound."
    },
    {
        "type": "mcq",
        "category": "AI Ethics",
        "question": "When auditing a binary classification model for fairness across a protected attribute (e.g., gender), what is the difference between 'Demographic Parity' and 'Equalized Odds'?",
        "options": [
            "Demographic Parity requires the true positive rates to be equal, while Equalized Odds requires the false positive rates to be equal.",
            "Demographic Parity requires the model to predict the positive outcome at the exact same rate across all groups, regardless of the ground truth. Equalized Odds requires the model to have equal True Positive Rates AND False Positive Rates across groups.",
            "Demographic Parity ensures the input features are scrubbed of sensitive data, while Equalized Odds modifies the loss function.",
            "There is no difference; they are mathematical synonyms."
        ],
        "correct": 1,
        "explanation": "Demographic parity simply demands that $P(\\hat{Y}=1 | A=0) = P(\\hat{Y}=1 | A=1)$, meaning the model approves loans (for example) at the same rate for both groups, ignoring actual creditworthiness. Equalized odds demands fairness conditional on the true label: $P(\\hat{Y}=1 | Y=y, A=0) = P(\\hat{Y}=1 | Y=y, A=1)$, meaning qualified individuals from both groups have the same chance of approval, and unqualified individuals have the same chance of rejection."
    }
]
,

    {
        "type": "mcq",
        "category": "NumPy - Memory Optimization",
        "question": "Cho mảng `X` kích thước $1000 \\times 1000$ kiểu `float64`. Khi thực hiện `Y = X[::2, ::2]`, `Y` là view hay copy, và dung lượng bộ nhớ cấp phát thêm xấp xỉ bao nhiêu?",
        "options": [
            "Copy, 2MB",
            "View, 0MB (chỉ object header)",
            "Copy, 8MB",
            "View, 8MB"
        ],
        "correct": 1,
        "explanation": "Basic slicing trong NumPy tạo ra một view, chia sẻ cùng buffer bộ nhớ với mảng gốc. `Y` chỉ lưu thông tin metadata (shape, strides), do đó không cấp phát bộ nhớ đáng kể."
    },
    {
        "type": "mcq",
        "category": "NumPy - Optimization",
        "question": "Để tính ma trận khoảng cách Euclidean giữa hai tập điểm `A` $(N, D)$ và `B` $(M, D)$, cách nào sau đây tối ưu bộ nhớ nhất thay vì dùng broadcasting `A[:, None, :] - B[None, :, :]`?",
        "options": [
            "np.linalg.norm(A[:, None] - B, axis=-1)",
            "Khai triển $(A-B)^2 = A^2 + B^2 - 2AB^T$ bằng `np.dot`",
            "Sử dụng vòng lặp for lồng nhau",
            "Dùng `np.subtract.outer(A, B)`"
        ],
        "correct": 1,
        "explanation": "Broadcasting `A[:, None] - B` sinh ra mảng trung gian $N \\times M \\times D$. Khai triển đại số $A^2 + B^2 - 2AB^T$ chỉ tạo ra ma trận kích thước $N \\times M$, giảm thiểu $D$ lần lượng bộ nhớ cần dùng."
    },
    {
        "type": "mcq",
        "category": "NumPy - Windowing",
        "question": "Hàm nào trong NumPy cho phép tạo rolling window (sliding window) trên mảng 1D mà KHÔNG cần sao chép dữ liệu (trả về view)?",
        "options": [
            "np.roll()",
            "np.lib.stride_tricks.as_strided()",
            "np.convolve()",
            "np.split()"
        ],
        "correct": 1,
        "explanation": "`as_strided` thao tác trực tiếp trên bộ nhớ bằng cách điều chỉnh strides, tạo ra một view của mảng cho rolling window mà không duplicate dữ liệu."
    },
    {
        "type": "mcq",
        "category": "NumPy - Memory",
        "question": "Sự khác biệt về bộ nhớ giữa `A = A + B` và `A += B` (giả sử A, B cùng kích thước và kiểu dữ liệu) là gì?",
        "options": [
            "Không có sự khác biệt.",
            "`A += B` thực hiện in-place, không tạo mảng trung gian. `A = A + B` tạo mảng mới rồi gán lại.",
            "`A = A + B` nhanh hơn và tối ưu hơn.",
            "`A += B` thay đổi type của A theo B."
        ],
        "correct": 1,
        "explanation": "`A += B` gọi `__iadd__` thực hiện cộng in-place, tiết kiệm bộ nhớ. `A = A + B` tạo một mảng mới chứa kết quả của `A + B` trước khi gán tham chiếu mới cho `A`."
    },
    {
        "type": "mcq",
        "category": "NumPy - Indexing",
        "question": "Phép toán nào sau đây luôn luôn trả về một COPY của dữ liệu trong NumPy?",
        "options": [
            "A[1:5, :]",
            "A[::-1]",
            "A[A > 0]",
            "A.reshape(-1, 2) (khi mảng contiguous)"
        ],
        "correct": 2,
        "explanation": "`A[A > 0]` là Boolean/Advanced Indexing, trong NumPy kết quả của Advanced Indexing luôn luôn trả về một bản copy mới, không phải view."
    },
    {
        "type": "mcq",
        "category": "NumPy - Data Loading",
        "question": "Để xử lý một ma trận lớn (ví dụ 50GB) không vừa RAM, công cụ nào trong NumPy cho phép đọc/ghi trực tiếp lên đĩa thay vì tải toàn bộ vào RAM?",
        "options": [
            "np.load()",
            "np.memmap()",
            "np.frombuffer()",
            "np.fromfile()"
        ],
        "correct": 1,
        "explanation": "`np.memmap` (Memory-mapped file) tạo một map của file nhị phân trên đĩa vào không gian nhớ ảo, cho phép truy cập mảng NumPy lớn mà không cần tải hết vào RAM."
    },
    {
        "type": "mcq",
        "category": "NumPy - Performance",
        "question": "So sánh `np.where(mask, A, B)` và `A[mask] = B[mask]`. Điều nào sau đây đúng về hiệu năng và bộ nhớ?",
        "options": [
            "`np.where` luôn tối ưu hơn.",
            "`np.where` tạo ra mảng kết quả mới (tốn bộ nhớ), trong khi `A[mask] = B[mask]` sửa đổi in-place nhưng có thể chậm hơn do advanced indexing.",
            "Cả hai giống hệt nhau ở mức byte code.",
            "`A[mask] = B[mask]` không dùng được nếu B là vô hướng."
        ],
        "correct": 1,
        "explanation": "`np.where` cấp phát bộ nhớ cho toàn bộ mảng kết quả mới. `A[mask] = ...` là in-place assignment, tiết kiệm bộ nhớ nhưng tốc độ phụ thuộc vào việc copy mask/data."
    },
    {
        "type": "mcq",
        "category": "NumPy - Operations",
        "question": "Hàm `np.einsum('ij,jk->ik', A, B)` tương đương với phép toán nào?",
        "options": [
            "Element-wise multiplication (A * B)",
            "Cross product",
            "Matrix multiplication (A @ B)",
            "Outer product"
        ],
        "correct": 2,
        "explanation": "Chuỗi Einstein summation `'ij,jk->ik'` tính tổng theo trục `j`, chính là định nghĩa chuẩn của nhân ma trận (dot product 2D)."
    },
    {
        "type": "mcq",
        "category": "NumPy - Counting",
        "question": "Để đếm tần số các số nguyên không âm trong mảng 1D nhanh nhất với O(N), hàm nào tốt nhất?",
        "options": [
            "np.unique(A, return_counts=True)",
            "np.bincount(A)",
            "np.histogram(A)",
            "collections.Counter(A)"
        ],
        "correct": 1,
        "explanation": "`np.bincount` chạy với độ phức tạp tuyến tính O(N) và rất tối ưu cho số nguyên dương nhỏ. `np.unique` cần O(N log N) do phải sort dữ liệu."
    },
    {
        "type": "mcq",
        "category": "NumPy - Memory Allocation",
        "question": "Sự khác biệt chính giữa `np.empty(shape)` và `np.zeros(shape)` là gì?",
        "options": [
            "`np.empty` chậm hơn.",
            "`np.empty` không khởi tạo giá trị (lấy dữ liệu rác trên RAM) nên nhanh hơn, trong khi `np.zeros` ghi số 0 lên toàn bộ.",
            "Không có khác biệt.",
            "`np.empty` tạo mảng view."
        ],
        "correct": 1,
        "explanation": "`np.empty` chỉ cấp phát block nhớ mà không clear, giúp tiết kiệm thời gian, phù hợp khi ta chắc chắn sẽ fill lại giá trị sau đó."
    },
    {
        "type": "mcq",
        "category": "Pandas - Memory",
        "question": "Khi làm việc với DataFrame có cột chứa text nhưng chỉ gồm vài giá trị lặp lại nhiều lần (VD: 'Male', 'Female'), cách tốt nhất để giảm bộ nhớ là:",
        "options": [
            "df['col'] = df['col'].astype(str)",
            "df['col'] = df['col'].astype('object')",
            "df['col'] = df['col'].astype('category')",
            "Sử dụng SparseDtype"
        ],
        "correct": 2,
        "explanation": "Chuyển sang kiểu `category` giúp ánh xạ các string dài thành các mã số nguyên (integer codes), tiết kiệm đáng kể bộ nhớ (đôi khi >90%)."
    },
    {
        "type": "mcq",
        "category": "Pandas - Merge",
        "question": "Trong xử lý dữ liệu Time Series, để merge 2 dataframe theo thời gian gần nhất (không cần khớp chính xác time), hàm nào nên dùng?",
        "options": [
            "pd.merge(how='outer')",
            "pd.merge_ordered()",
            "pd.merge_asof()",
            "pd.concat()"
        ],
        "correct": 2,
        "explanation": "`pd.merge_asof` (As-of merge) thực hiện match row gần nhất dựa trên giá trị (thường là datetime). Nó hỗ trợ `direction='backward'/'forward'/'nearest'` rất hiệu quả."
    },
    {
        "type": "mcq",
        "category": "Pandas - Warning",
        "question": "Lỗi `SettingWithCopyWarning` thường xuất hiện khi nào?",
        "options": [
            "Khi copy DataFrame bằng `.copy()`",
            "Khi gán giá trị thông qua chained indexing, ví dụ `df[df['A'] > 0]['B'] = 1`",
            "Khi gọi `df.dropna(inplace=True)`",
            "Khi dùng `.loc` để select dòng"
        ],
        "correct": 1,
        "explanation": "Chained indexing `df[mask]['B'] = 1` gồm 2 phép toán: `__getitem__` và `__setitem__`. Pandas không đảm bảo object trung gian là view hay copy, nên gán giá trị có thể không tác động lên `df` gốc, gây ra warning."
    },
    {
        "type": "mcq",
        "category": "Pandas - Optimization",
        "question": "Đối với DataFrame rất lớn, hàm `df.eval('A + B')` tối ưu bộ nhớ nhờ thư viện backend nào?",
        "options": [
            "Numexpr",
            "Cython",
            "Numba",
            "Dask"
        ],
        "correct": 0,
        "explanation": "`pd.eval()` và `pd.query()` sử dụng Numexpr dưới hood. C Parser này có khả năng tính toán biểu thức element-wise mảng lớn mà không sinh ra intermediate arrays, tiết kiệm RAM."
    },
    {
        "type": "mcq",
        "category": "Pandas - TimeSeries",
        "question": "Khi downsample chuỗi thời gian bằng `df.resample('5min', closed='right', label='right').sum()`, một data point lúc 09:05 sẽ thuộc về khoảng nào?",
        "options": [
            "09:00 - 09:05",
            "09:05 - 09:10",
            "Cả hai",
            "Bị bỏ qua"
        ],
        "correct": 0,
        "explanation": "`closed='right'` nghĩa là khoảng thời gian bao gồm giá trị bên phải $(a, b]$. Điểm 09:05 sẽ nằm trong khoảng $(09:00, 09:05]$. `label='right'` sẽ đặt index cho dòng này là 09:05."
    },
    {
        "type": "mcq",
        "category": "Pandas - Pivot",
        "question": "Hàm `pivot_table` mặc định sẽ xử lý thế nào đối với các hàng chứa `NaN` trong cột tính toán, nếu `dropna=True`?",
        "options": [
            "Báo lỗi",
            "Thay thế bằng 0",
            "Loại bỏ các columns/rows mà TẤT CẢ các mục nhập đều là NaN trong output",
            "Forward fill"
        ],
        "correct": 2,
        "explanation": "Trong `pd.pivot_table`, tham số `dropna=True` (mặc định) có nghĩa là nó sẽ không bao gồm các cột hoặc hàng kết quả mà tất cả các giá trị tổng hợp của nó là NaN."
    },
    {
        "type": "mcq",
        "category": "Pandas - IO",
        "question": "Tham số `chunksize` trong `pd.read_csv()` trả về đối tượng gì?",
        "options": [
            "DataFrame đã nối",
            "TextFileReader iterator để duyệt qua từng chunk của DataFrame",
            "Một list các DataFrames",
            "Dask DataFrame"
        ],
        "correct": 1,
        "explanation": "Khai báo `chunksize=N` sẽ biến kết quả trả về của `read_csv` thành một iterator `TextFileReader`, cho phép đọc file lớn từng block N dòng."
    },
    {
        "type": "mcq",
        "category": "Pandas - Apply",
        "question": "So với `df.apply(func)`, dùng `df.transform(func)` có đặc điểm bắt buộc gì?",
        "options": [
            "Trả về cùng một object type với object truyền vào (ví dụ groupby df trả về df có cùng index và shape như gốc).",
            "Chỉ dùng được cho string",
            "Chạy song song",
            "Cho phép aggregate giảm số chiều"
        ],
        "correct": 0,
        "explanation": "`transform` bắt buộc phải trả về object cùng kích thước (shape) hoặc có thể broadcast về cùng kích thước với dữ liệu đầu vào, hữu ích khi muốn gán kết quả thống kê lại cho từng dòng gốc."
    },
    {
        "type": "mcq",
        "category": "Pandas - Shape",
        "question": "Sự khác nhau cơ bản giữa `stack()` và `melt()` là gì?",
        "options": [
            "`stack` tác động lên index (MultiIndex), `melt` nén các cột thành 2 cột 'variable' và 'value'.",
            "`stack` dùng cho DataFrame, `melt` dùng cho Series.",
            "Giống nhau hoàn toàn.",
            "`melt` sinh ra MultiIndex, `stack` thì không."
        ],
        "correct": 0,
        "explanation": "`stack()` di chuyển column levels thành index levels (tạo MultiIndex Series), trong khi `melt()` 'unpivot' bảng bằng cách gom nhiều cột lại thành định dạng long form (cột key và value)."
    },
    {
        "type": "mcq",
        "category": "Pandas - Merge",
        "question": "Tham số `validate` trong `pd.merge()` dùng để làm gì?",
        "options": [
            "Kiểm tra kiểu dữ liệu các cột.",
            "Kiểm tra tính duy nhất của quan hệ join (ví dụ '1:1', '1:m', 'm:1').",
            "Xác thực DataFrame không rỗng.",
            "Tự động ép kiểu."
        ],
        "correct": 1,
        "explanation": "`validate='1:1'` hoặc `'1:m'` giúp Pandas quăng lỗi `MergeError` nếu key join không thỏa mãn số lượng ràng buộc kỳ vọng, tránh rủi ro Cartesian explosion sinh ra dữ liệu khổng lồ ngoài ý muốn."
    },
    {
        "type": "mcq",
        "category": "Pandas - Missing Data",
        "question": "Tham số `method='time'` trong `df.interpolate()` hoạt động như thế nào?",
        "options": [
            "Điền NaN theo thời gian tuyến tính dựa trên DatetimeIndex.",
            "Điền bằng giá trị timestamp hiện tại.",
            "Báo lỗi nếu không có cột 'time'.",
            "Tự động resample."
        ],
        "correct": 0,
        "explanation": "`interpolate(method='time')` sử dụng `DatetimeIndex` để nội suy tuyến tính các điểm NaN dựa trên khoảng cách thời gian thực tế giữa các điểm có sẵn."
    },
    {
        "type": "mcq",
        "category": "Pandas - Operation",
        "question": "Hàm `df.explode('col')` có chức năng gì?",
        "options": [
            "Phá hủy cột.",
            "Tách cột string thành nhiều cột.",
            "Chuyển đổi một cột chứa list/array thành nhiều dòng, nhân bản giá trị các cột khác tương ứng.",
            "Mở rộng chiều của mảng 2D."
        ],
        "correct": 2,
        "explanation": "`explode` mở từng list-like element trong một cell thành từng hàng riêng biệt (flattening), giúp xử lý JSON nested hoặc arrays dễ dàng."
    },
    {
        "type": "mcq",
        "category": "Pandas - Optimization",
        "question": "Để merge hai DataFrame siêu lớn dựa trên index của chúng, hàm nào cho hiệu năng O(N) nhanh nhất?",
        "options": [
            "pd.merge(df1, df2, on='id')",
            "df1.join(df2, how='inner')",
            "pd.concat([df1, df2], axis=1, join='inner')",
            "Cả 3 giống nhau"
        ],
        "correct": 1,
        "explanation": "`df1.join(df2)` mặc định join trực tiếp trên Index, bỏ qua bước tìm hash keys, tối ưu hóa C dưới backend tốt hơn `merge` khi đã setup sẵn Index."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - CV",
        "question": "Mục đích chính của Nested Cross-Validation là gì?",
        "options": [
            "Giảm thời gian train",
            "Đánh giá hiệu suất thực tế của mô hình một cách không thiên lệch (unbiased) khi có hyperparameter tuning.",
            "Tăng số lượng dữ liệu train",
            "Giải quyết imbalanced data"
        ],
        "correct": 1,
        "explanation": "Trong Nested CV, vòng lặp trong (inner loop) dùng để tuning hyperparams (GridSearchCV), vòng ngoài (outer loop) đánh giá sai số mô hình độc lập, tránh rò rỉ dữ liệu (overfitting vào tập validation)."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Data Leakage",
        "question": "Lỗi Data Leakage nào xảy ra nếu ta gọi `StandardScaler().fit_transform(X)` TRƯỚC KHI thực hiện `cross_val_score`?",
        "options": [
            "Không bị rò rỉ.",
            "StandardScaler học thông số (mean, std) từ cả tập Validation/Test của CV, dẫn đến điểm CV cao ảo tưởng.",
            "Scale làm mất thông tin outlier.",
            "Làm chậm quá trình CV."
        ],
        "correct": 1,
        "explanation": "Việc gọi `fit_transform` trên toàn bộ tập $X$ khiến thông tin về test fold bị rò rỉ vào bước preprocessing. Giải pháp chuẩn là đưa `StandardScaler` vào trong `Pipeline`."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Tuning",
        "question": "Tham số `refit=True` (mặc định) trong `GridSearchCV` thực hiện điều gì SAU KHI tìm ra best parameters?",
        "options": [
            "In ra tham số tốt nhất.",
            "Xóa bộ nhớ đệm.",
            "Tự động train lại mô hình trên TOÀN BỘ dữ liệu đầu vào `X` bằng bộ siêu tham số tốt nhất.",
            "Khởi động lại lưới tìm kiếm."
        ],
        "correct": 2,
        "explanation": "Khi `refit=True`, sau quá trình CV đánh giá, mô hình được fit lại một lần nữa trên toàn bộ dữ liệu cung cấp, cho phép gọi `.predict()` trực tiếp trên object `GridSearchCV`."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Splitting",
        "question": "Sự khác biệt giữa `KFold` và `GroupKFold` là gì?",
        "options": [
            "`GroupKFold` tự động stratify (cân bằng) class distribution.",
            "`GroupKFold` đảm bảo các mẫu từ cùng một nhóm (group/ID) không bị chia cắt giữa tập train và tập test trong cùng một fold.",
            "Không khác gì.",
            "`GroupKFold` dùng cho dữ liệu Time Series."
        ],
        "correct": 1,
        "explanation": "`GroupKFold` cực kì quan trọng trong y tế hoặc user-data, ngăn chặn rò rỉ dữ liệu khi nhiều mẫu đến từ cùng một thực thể (ví dụ 5 ảnh của cùng một bệnh nhân)."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Pipeline",
        "question": "Để tránh việc một Transformer đắt đỏ (như PCA lớn) phải tính lại trong mỗi bước GridSearchCV, `Pipeline` cung cấp giải pháp gì?",
        "options": [
            "Đặt tham số `n_jobs=-1`",
            "Sử dụng tham số `memory='cachedir'` để lưu kết quả của Transformer vào đĩa cứng (joblib).",
            "Dùng FeatureUnion",
            "Không thể tránh được."
        ],
        "correct": 1,
        "explanation": "Gán `Pipeline(..., memory='my_cache')` cho phép cache (joblib) kết quả của các transformers sau khi fit_transform. Lần CV sau, nếu params của Transformer không đổi, Pipeline sẽ load kết quả trực tiếp từ đĩa."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Metrics",
        "question": "Khi tạo custom metric bằng `make_scorer` để dùng trong GridSearch, nếu metric của bạn yêu cầu xác suất (vd: ROC_AUC), bạn phải truyền tham số nào?",
        "options": [
            "`needs_proba=True` (hoặc `response_method='predict_proba'` trong bản mới).",
            "`is_classification=True`",
            "`probability=True`",
            "`greater_is_better=True`"
        ],
        "correct": 0,
        "explanation": "Nếu custom metric tính toán dựa trên xác suất, hàm scoring phải biết để gọi `estimator.predict_proba()` thay vì `predict()`. `needs_proba=True` chỉ định việc này."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Transformers",
        "question": "Trong `ColumnTransformer`, tham số `sparse_threshold` hoạt động thế nào?",
        "options": [
            "Loại bỏ các cột có quá nhiều số 0.",
            "Nếu tỷ lệ các giá trị khác 0 của đầu ra tổng hợp thấp hơn ngưỡng này, nó sẽ trả về ma trận `scipy.sparse` thay vì numpy mảng đặc để tiết kiệm bộ nhớ.",
            "Ép kiểu dữ liệu sang boolean.",
            "Tự sinh sparse pca."
        ],
        "correct": 1,
        "explanation": "`sparse_threshold` mặc định 0.3. Nếu tỷ lệ phần tử != 0 của kết quả stacked bé hơn 0.3, kết quả trả về là ma trận thưa (đặc biệt hữu dụng khi kết hợp OneHotEncoder và text TFIDF)."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Big Data",
        "question": "Làm thế nào để train mô hình Machine Learning trên tập dữ liệu vượt quá dung lượng RAM trong Scikit-Learn?",
        "options": [
            "Chỉ định tham số `memory='auto'`",
            "Tăng kích thước batch size",
            "Dùng các mô hình hỗ trợ Out-of-core learning thông qua hàm `partial_fit()`",
            "Dùng GridSearchCV"
        ],
        "correct": 2,
        "explanation": "Các mô hình như `SGDClassifier`, `MiniBatchKMeans`, `MultinomialNB` hỗ trợ `partial_fit()`, cho phép feed dữ liệu từng chunk nhỏ dần dần mà không cần load toàn bộ RAM."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Validation",
        "question": "Hàm `cross_val_predict` khác với `cross_val_score` ở điểm cốt lõi nào?",
        "options": [
            "Trả về độ chính xác thay vì error.",
            "Trả về mảng predictions dự đoán trên từng mẫu dữ liệu khi chúng nằm trong tập validation fold, không phải list điểm số.",
            "Chạy nhanh hơn do không tune hyperparam.",
            "Không hỗ trợ stratification."
        ],
        "correct": 1,
        "explanation": "`cross_val_predict` tổ hợp lại các dự đoán out-of-fold cho toàn bộ dataset. Hữu dụng để tạo meta-features cho Stacking hoặc vẽ đường ROC thực tế."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Tuning",
        "question": "Tại sao nên dùng `HalvingGridSearchCV` (Successive Halving) thay cho `GridSearchCV` thông thường khi không gian tham số quá lớn?",
        "options": [
            "Vì nó dùng thuật toán Genetic để lai ghép.",
            "Nó huấn luyện toàn bộ tham số nhưng cắt bớt số cây (trees).",
            "Nó cấp phát tăng dần tài nguyên (như số mẫu n_samples) và loại bỏ dần một nửa số lượng tham số kém nhất, giúp hội tụ nhanh siêu cấp.",
            "Nó chia đều tham số cho GPU."
        ],
        "correct": 2,
        "explanation": "Successive Halving đánh giá toàn bộ tổ hợp trên lượng nhỏ data. Sau đó giữ lại top x% tốt nhất, nhân đôi số lượng data và lặp lại cho đến khi đạt toàn bộ data, tiết kiệm vô số thời gian so với train full data ngay từ đầu."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Development",
        "question": "Để viết một Custom Transformer tương thích với Pipeline, class của bạn nên kế thừa từ các base class nào?",
        "options": [
            "`BaseEstimator` và `TransformerMixin`",
            "`PipelineMixin`",
            "`GridSearchMixin`",
            "`CustomTransformer`"
        ],
        "correct": 0,
        "explanation": "`BaseEstimator` cung cấp `get_params` và `set_params` (cho GridSearch). `TransformerMixin` cung cấp tự động `fit_transform()` nếu bạn định nghĩa `fit()` và `transform()`."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - CV Strategy",
        "question": "Để chia một tập dữ liệu y tế Imbalanced (ví dụ: Chẩn đoán hiếm), và có sự lặp lại của cùng bệnh nhân (mỗi người chụp 5 tấm ảnh X-Quang), bạn NÊN dùng Class chia fold nào?",
        "options": [
            "KFold",
            "StratifiedKFold",
            "GroupKFold",
            "StratifiedGroupKFold"
        ],
        "correct": 3,
        "explanation": "`StratifiedGroupKFold` vừa đảm bảo tỷ lệ nhãn (Stratified) qua các fold, vừa đảm bảo tính độc lập nhóm (Group) - tức ảnh của cùng bệnh nhân không nằm ở train/test chung."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - Memory",
        "question": "Trong Python, cú pháp `__slots__ = ['a', 'b']` bên trong một Class có mục đích tối ưu gì?",
        "options": [
            "Ngăn không cho đổi tên class.",
            "Vô hiệu hóa `__dict__` động của object, cấp phát cố định bộ nhớ cho thuộc tính, giúp tiết kiệm bộ nhớ RAM đáng kể khi khởi tạo hàng triệu object.",
            "Buộc các thuộc tính phải là private.",
            "Đẩy object lưu trữ sang GPU."
        ],
        "correct": 1,
        "explanation": "Mỗi Python instance mặc định có một `__dict__` lưu attribute gây lãng phí bộ nhớ. `__slots__` giới hạn thuộc tính theo cấu trúc C tĩnh, tiết kiệm RAM."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - Iteration",
        "question": "Sự khác biệt cốt lõi về RAM khi dùng List Comprehension `[x**2 for x in data]` và Generator Expression `(x**2 for x in data)` cho 1 triệu phần tử?",
        "options": [
            "List cấp phát RAM lưu liền 1 triệu kết quả. Generator lưu state và sinh lazy (từng phần tử một), RAM gần như ~0.",
            "Generator nhanh hơn List Comprehension.",
            "Cả hai giống nhau nếu `data` là numpy array.",
            "List comprehension không hỗ trợ filter."
        ],
        "correct": 0,
        "explanation": "Generator trả về iterator (yield). Nó không giữ toàn bộ mảng trong RAM mà tính toán và trả về on-the-fly, là kĩ thuật thiết yếu để load file siêu lớn."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - Parallelism",
        "question": "Khái niệm `GIL` (Global Interpreter Lock) trong CPython ảnh hưởng thế nào đến đa luồng (threading) khi xử lý NumPy array hoặc Pandas DataFrame?",
        "options": [
            "Chặn hoàn toàn đa luồng chạy song song trên nhiều lõi CPU đối với mọi tác vụ.",
            "Tuy GIL giới hạn code thuần Python, đa số hàm tính toán nặng của NumPy/Pandas viết bằng C đã giải phóng (release) GIL, do đó vẫn hưởng lợi từ multithreading.",
            "Làm crash bộ nhớ.",
            "Bắt buộc dùng Cython để bypass."
        ],
        "correct": 1,
        "explanation": "NumPy release GIL (ví dụ khi gọi `np.dot`). Nhờ vậy `ThreadPoolExecutor` trong Python vẫn chạy tính toán ma trận song song (CPU bound) rất hiệu quả mà không cần spawn multiprocessing."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - Profiling",
        "question": "Vì sao hàm `sys.getsizeof()` thường báo sai dung lượng bộ nhớ đối với các object phức tạp như dictionary chứa custom class?",
        "options": [
            "Do lỗi của module sys.",
            "Bởi vì nó chỉ đo kích thước nông (shallow) của con trỏ và object struct gốc, bỏ qua kích thước của các nested object mà nó trỏ tới.",
            "Nó tính thêm RAM ảo swap.",
            "Nó chỉ đếm string."
        ],
        "correct": 1,
        "explanation": "`getsizeof` không thực hiện đệ quy lướt qua references graph. Để đo chuẩn dung lượng deep cần công cụ như `pympler.asizeof`."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - GC",
        "question": "Trong Python, module `gc.collect()` được gọi tường minh (explicitly) để giải quyết vấn đề gì mà Reference Counting không bắt được?",
        "options": [
            "Reference bị gán Null.",
            "Giải phóng các Cyclic References (tham chiếu vòng) không sử dụng nữa.",
            "Reset trạng thái biến toàn cục.",
            "Dọn dẹp log file."
        ],
        "correct": 1,
        "explanation": "Garbage Collector phân thế hệ của Python có vai trò chính là tìm và dọn các cụm object tham chiếu chéo lẫn nhau (VD: object A trỏ B, B trỏ A) có refcount > 0 nhưng bị cô lập khỏi chương trình chính."
    },
    {
        "type": "mcq",
        "category": "Pandas - Indexing",
        "question": "Cách an toàn và tối ưu nhất để dùng `.loc` slicer cắt dòng trên `MultiIndex` Dataframe là?",
        "options": [
            "df.loc[('A', 'B'), :]",
            "Sử dụng đối tượng `pd.IndexSlice`, ví dụ: `idx = pd.IndexSlice; df.loc[idx[:, 'B'], :]`",
            "df.loc['A']['B']",
            "df.unstack()['B']"
        ],
        "correct": 1,
        "explanation": "`pd.IndexSlice` (hoặc tuples) cho phép slicing sâu, nhiều cấp qua các chiều MultiIndex mà không gây `LexsortDepthWarning` hoặc Performance Warning nếu index được sorted."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Transformers",
        "question": "Lớp `FunctionTransformer(func, validate=False)` hữu dụng nhất trong Pipeline khi nào?",
        "options": [
            "Khi cần scale dữ liệu.",
            "Khi cần nhúng một hàm xử lý stateless đơn giản (ví dụ `np.log1p`) vào luồng CV.",
            "Khi cần train mạng Neural.",
            "Khi muốn dump Pickle."
        ],
        "correct": 1,
        "explanation": "Biến hàm Python thành Transformer chuẩn mà không cần viết Class phức tạp. Rất tiện cho các phép biến đổi non-parametric không yêu cầu bước `fit()`."
    },
    {
        "type": "mcq",
        "category": "Pandas - String",
        "question": "Để tối ưu tìm kiếm chuỗi văn bản bằng Regex trên một Series hàng triệu bản ghi, pandas `.str` accessor sử dụng engine nào để tăng tốc ở các bản pandas >= 1.5.0?",
        "options": [
            "re module của Python mặc định",
            "PyArrow string backend (nếu dtype là string[pyarrow])",
            "C++ backend thuần túy",
            "NLTK"
        ],
        "correct": 1,
        "explanation": "Sử dụng pyarrow backend `pd.Series(..., dtype='string[pyarrow]')` đem lại tốc độ xử lý string nhanh gấp nhiều lần so với object strings cấp phát động của Python core."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Imbalanced",
        "question": "Trong Scikit-Learn, tham số `class_weight='balanced'` trong LogisticRegression tính trọng số nghịch đảo dựa trên công thức nào?",
        "options": [
            "n_samples / (n_classes * np.bincount(y))",
            "n_classes / n_samples",
            "np.log(n_samples)",
            "1 / np.sqrt(y)"
        ],
        "correct": 0,
        "explanation": "Trọng số class tỉ lệ nghịch với tần suất xuất hiện, `n_samples / (n_classes * count(class_i))`, phạt mô hình nhiều hơn nếu nó đoán sai minority class."
    },
    {
        "type": "mcq",
        "category": "Python Advanced - Itertools",
        "question": "Để bỏ qua 10 dòng đầu của generator csv reader mà không load vào bộ nhớ, hàm nào trong `itertools` cực kì hiệu quả?",
        "options": [
            "itertools.chain",
            "itertools.groupby",
            "itertools.islice",
            "itertools.takewhile"
        ],
        "correct": 2,
        "explanation": "`islice(iterator, 10, None)` duyệt tiêu thụ (consume) 10 dòng đầu bằng iterator mức C một cách lazy, cực nhanh và không tốn bộ nhớ lưu List."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Ensembles",
        "question": "Tham số `n_jobs=-1` có ý nghĩa là gì đối với mô hình RandomForestClassifier?",
        "options": [
            "Sử dụng 1 core CPU.",
            "Tắt multiprocessing.",
            "Sử dụng toàn bộ các threads/cores hiện có của CPU để song song hóa quá trình fit cây.",
            "Giới hạn RAM không vượt quá 1GB."
        ],
        "correct": 2,
        "explanation": "Giá trị `-1` được backend Joblib hiểu là sử dụng `os.cpu_count()` processors để train các estimators độc lập (cây) hoàn toàn song song."
    },
    {
        "type": "mcq",
        "category": "Pandas - Resample",
        "question": "Giả sử bạn gộp dữ liệu theo giờ (`df.resample('H')`), để kết hợp nhiều agg functions khác nhau trên nhiều cột (ví dụ: tổng cho cột lượng, giá trị cuối cho cột giá), bạn dùng cú pháp nào?",
        "options": [
            "df.resample('H').agg({'amount': 'sum', 'price': 'last'})",
            "df.resample('H').sum().last()",
            "df.resample('H', cols=['amount','price'])",
            "Không thể thực hiện"
        ],
        "correct": 0,
        "explanation": "`agg()` dictionary cho phép định tuyến chính xác các cột khác nhau tới các hàm thống kê (aggregations) khác nhau cực kỳ linh hoạt."
    },
    {
        "type": "mcq",
        "category": "NumPy - Masking",
        "question": "Trong NumPy, giá trị `~np.isnan(X)` thực hiện chức năng gì?",
        "options": [
            "Chuyển số NaN thành 0",
            "Tạo một boolean mask True tại những vị trí dữ liệu hợp lệ (KHÔNG phải NaN)",
            "Tìm vị trí của chuỗi",
            "Đảo ngược trục"
        ],
        "correct": 1,
        "explanation": "Toán tử `~` là Bitwise NOT, kết hợp với vectorization sẽ đảo ngược boolean array. Khái niệm này áp dụng rông rãi để filter non-missing data."
    },
    {
        "type": "mcq",
        "category": "Pandas - Memory Optimization",
        "question": "Trong Pandas, hàm `downcast` của `pd.to_numeric` giúp ích gì?",
        "options": [
            "Chuyển số thành string.",
            "Ép kiểu dữ liệu float64/int64 thành kiểu nhỏ nhất có thể (float32, int8...) mà không làm mất mát độ chính xác, giúp giảm thiểu footprint bộ nhớ.",
            "Hạ bậc của dataframe về series.",
            "Chuyển array thành generator."
        ],
        "correct": 1,
        "explanation": "Sử dụng `pd.to_numeric(col, downcast='integer'/'float')` là một trong những best practice để tối ưu memory footprint, chuyển các số nguyên nhỏ về `int8` hoặc `int16` thay vì `int64` mặc định."
    },
    {
        "type": "mcq",
        "category": "Scikit-Learn - Preprocessing",
        "question": "Tại sao `OneHotEncoder` của Scikit-Learn lại có tham số `handle_unknown='ignore'`?",
        "options": [
            "Để bỏ qua các lỗi crash.",
            "Để khi gặp class/giá trị mới hoàn toàn ở tập Test mà không có trong lúc train, nó sẽ gán toàn bộ array encode thành 0 thay vì văng Exception.",
            "Để không học class mới.",
            "Để tự động xóa dòng test đó."
        ],
        "correct": 1,
        "explanation": "Trong môi trường Production/Cross-validation, rất hay gặp class categoricals bị bỏ sót trong train set. `handle_unknown='ignore'` giúp Pipeline không bị crash."
    }
]
];
