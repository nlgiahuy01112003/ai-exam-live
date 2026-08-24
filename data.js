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

];