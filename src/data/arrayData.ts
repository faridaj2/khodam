interface Khodam {
    nama: string;
    fungsi: string;
    asal: string;
    deskripsi: string;
}

class Data {
    arrayData: Khodam[];
    constructor() {
        this.arrayData = [
            {
                "nama": "Khodam Harimau Putih",
                "fungsi": "Perlindungan dan kekuatan fisik",
                "asal": "Jawa",
                "deskripsi": "Khodam ini dikenal memberikan perlindungan dari serangan fisik dan menambah kekuatan fisik bagi pemiliknya."
            },
            {
                "nama": "Khodam Macan Kumbang",
                "fungsi": "Keberanian dan ketangguhan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan keberanian dan ketangguhan dalam menghadapi berbagai tantangan hidup."
            },
            {
                "nama": "Khodam Naga Emas",
                "fungsi": "Kemakmuran dan kebijaksanaan",
                "asal": "Bali",
                "deskripsi": "Khodam ini dikenal memberikan kemakmuran dan kebijaksanaan dalam mengambil keputusan."
            },
            {
                "nama": "Khodam Garuda Sakti",
                "fungsi": "Proteksi spiritual dan energi positif",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan proteksi dari gangguan spiritual dan mengisi lingkungan dengan energi positif."
            },
            {
                "nama": "Khodam Kera Sakti",
                "fungsi": "Kecerdasan dan ketangkasan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini meningkatkan kecerdasan dan ketangkasan dalam bertindak."
            },
            {
                "nama": "Khodam Buaya Putih",
                "fungsi": "Kekebalan dan keberuntungan",
                "asal": "Kalimantan",
                "deskripsi": "Khodam ini memberikan kekebalan dari penyakit dan mendatangkan keberuntungan."
            },
            {
                "nama": "Khodam Elang Hitam",
                "fungsi": "Penglihatan jauh dan kebijaksanaan",
                "asal": "Papua",
                "deskripsi": "Khodam ini memberikan kemampuan melihat masa depan dan kebijaksanaan dalam membuat keputusan."
            },
            {
                "nama": "Khodam Harimau Jawa",
                "fungsi": "Kekuatan dan keberanian",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kekuatan dan keberanian luar biasa bagi pemiliknya."
            },
            {
                "nama": "Khodam Ratu Pantai Selatan",
                "fungsi": "Kecantikan dan pesona",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kecantikan dan pesona yang menarik banyak orang."
            },
            {
                "nama": "Khodam Keris Pusaka",
                "fungsi": "Proteksi dan kekuatan spiritual",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan proteksi spiritual dan kekuatan dalam menghadapi musuh gaib."
            },
            {
                "nama": "Khodam Singa Barong",
                "fungsi": "Kepemimpinan dan dominasi",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kekuatan kepemimpinan dan dominasi dalam berbagai situasi."
            },
            {
                "nama": "Khodam Bidadari",
                "fungsi": "Kebijaksanaan dan kedamaian",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini membawa kebijaksanaan dan kedamaian hati bagi pemiliknya."
            },
            {
                "nama": "Khodam Jenglot",
                "fungsi": "Kekayaan dan kemakmuran",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini dipercaya membawa kekayaan dan kemakmuran finansial."
            },
            {
                "nama": "Khodam Lembu Sekilan",
                "fungsi": "Kekuatan dan pertahanan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kekuatan fisik dan pertahanan dari serangan musuh."
            },
            {
                "nama": "Khodam Kuda Sembrani",
                "fungsi": "Kecepatan dan ketangkasan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini meningkatkan kecepatan dan ketangkasan dalam bertindak."
            },
            {
                "nama": "Khodam Penjaga Warisan",
                "fungsi": "Proteksi harta benda",
                "asal": "Bali",
                "deskripsi": "Khodam ini memberikan perlindungan terhadap harta benda dari pencurian dan kehilangan."
            },
            {
                "nama": "Khodam Peri Hutan",
                "fungsi": "Kesehatan dan keseimbangan",
                "asal": "Kalimantan",
                "deskripsi": "Khodam ini memberikan kesehatan dan keseimbangan dalam hidup."
            },
            {
                "nama": "Khodam Siluman Ular",
                "fungsi": "Kecerdasan dan strategi",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini meningkatkan kecerdasan dan kemampuan dalam merencanakan strategi."
            },
            {
                "nama": "Khodam Bayangan Hitam",
                "fungsi": "Proteksi dari musuh gaib",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan perlindungan dari serangan gaib dan energi negatif."
            },
            {
                "nama": "Khodam Raja Laut",
                "fungsi": "Kekuasaan dan kendali",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini memberikan kekuasaan dan kendali dalam berbagai aspek kehidupan."
            },
            {
                "nama": "Khodam Dewi Sri",
                "fungsi": "Kesuburan dan kemakmuran",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kesuburan dalam bercocok tanam dan kemakmuran dalam kehidupan."
            },
            {
                "nama": "Khodam Harimau Merah",
                "fungsi": "Keberanian dan perlindungan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan keberanian dan perlindungan dari segala ancaman."
            },
            {
                "nama": "Khodam Naga Hitam",
                "fungsi": "Kekuatan spiritual dan kekuasaan",
                "asal": "Bali",
                "deskripsi": "Khodam ini memberikan kekuatan spiritual dan kekuasaan dalam mengendalikan situasi."
            },
            {
                "nama": "Khodam Bambu Kuning",
                "fungsi": "Keselamatan dan ketenangan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan keselamatan dari bahaya dan ketenangan batin."
            },
            {
                "nama": "Khodam Raja Macan",
                "fungsi": "Kekuatan dan perlindungan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan kekuatan fisik dan perlindungan dari segala ancaman."
            },
            {
                "nama": "Khodam Serigala Putih",
                "fungsi": "Kecerdikan dan ketajaman",
                "asal": "Papua",
                "deskripsi": "Khodam ini memberikan kecerdikan dalam berpikir dan ketajaman dalam bertindak."
            },
            {
                "nama": "Khodam Duyung Laut",
                "fungsi": "Kecantikan dan pesona",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini memberikan kecantikan dan pesona yang menarik perhatian orang."
            },
            {
                "nama": "Khodam Harimau Sumatera",
                "fungsi": "Perlindungan dan kekuatan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan perlindungan dari ancaman fisik dan kekuatan fisik."
            },
            {
                "nama": "Khodam Rajawali Emas",
                "fungsi": "Penglihatan jauh dan kebijaksanaan",
                "asal": "Papua",
                "deskripsi": "Khodam ini memberikan kemampuan melihat jauh ke depan dan kebijaksanaan dalam mengambil keputusan."
            },
            {
                "nama": "Khodam Macan Hitam",
                "fungsi": "Keberanian dan kekuatan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan keberanian dalam menghadapi tantangan dan kekuatan fisik."
            },
            {
                "nama": "Khodam Singa Hitam",
                "fungsi": "Proteksi dan dominasi",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan perlindungan dari ancaman dan kekuatan dominasi."
            },
            {
                "nama": "Khodam Kuda Pusaka",
                "fungsi": "Kecepatan dan ketangkasan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini meningkatkan kecepatan dan ketangkasan dalam berbagai situasi."
            },
            {
                "nama": "Khodam Dewi Laut",
                "fungsi": "Kecantikan dan pesona",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini memberikan kecantikan dan pesona yang menarik perhatian."
            },
            {
                "nama": "Khodam Macan Tutul",
                "fungsi": "Kecerdasan dan ketangguhan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan kecerdasan dalam berpikir dan ketangguhan dalam bertindak."
            },
            {
                "nama": "Khodam Burung Hantu",
                "fungsi": "Penglihatan malam dan kebijaksanaan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kemampuan melihat dalam kegelapan dan kebijaksanaan."
            },
            {
                "nama": "Khodam Naga Laut",
                "fungsi": "Proteksi dan kekuasaan",
                "asal": "Bali",
                "deskripsi": "Khodam ini memberikan proteksi dari ancaman laut dan kekuasaan."
            },
            {
                "nama": "Khodam Gajah Mada",
                "fungsi": "Kekuatan dan kebijaksanaan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kekuatan fisik dan kebijaksanaan dalam memimpin."
            },
            {
                "nama": "Khodam Merpati Putih",
                "fungsi": "Kedamaian dan kesejahteraan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kedamaian dalam hidup dan kesejahteraan."
            },
            {
                "nama": "Khodam Siluman Kucing",
                "fungsi": "Kelincahan dan ketangkasan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kelincahan dalam bertindak dan ketangkasan dalam bergerak."
            },
            {
                "nama": "Khodam Macan Putih",
                "fungsi": "Keberanian dan perlindungan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan keberanian dalam menghadapi ancaman dan perlindungan fisik."
            },
            {
                "nama": "Khodam Kuda Laut",
                "fungsi": "Kecepatan dan ketangkasan",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini meningkatkan kecepatan dalam bergerak dan ketangkasan dalam bertindak."
            },
            {
                "nama": "Khodam Anjing Hitam",
                "fungsi": "Proteksi dan loyalitas",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan proteksi dari ancaman dan loyalitas yang tinggi."
            },
            {
                "nama": "Khodam Naga Merah",
                "fungsi": "Kekuatan dan kemakmuran",
                "asal": "Bali",
                "deskripsi": "Khodam ini memberikan kekuatan fisik dan kemakmuran dalam kehidupan."
            },
            {
                "nama": "Khodam Harimau Hitam",
                "fungsi": "Keberanian dan perlindungan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan keberanian dalam menghadapi ancaman dan perlindungan fisik."
            },
            {
                "nama": "Khodam Singa Putih",
                "fungsi": "Proteksi dan kekuatan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan perlindungan dari ancaman dan kekuatan fisik."
            },
            {
                "nama": "Khodam Serigala Hitam",
                "fungsi": "Kecerdikan dan ketajaman",
                "asal": "Papua",
                "deskripsi": "Khodam ini memberikan kecerdikan dalam berpikir dan ketajaman dalam bertindak."
            },
            {
                "nama": "Khodam Kuda Hitam",
                "fungsi": "Kecepatan dan ketangkasan",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini meningkatkan kecepatan dalam bergerak dan ketangkasan dalam bertindak."
            },
            {
                "nama": "Khodam Macan Merah",
                "fungsi": "Keberanian dan kekuatan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan keberanian dalam menghadapi ancaman dan kekuatan fisik."
            },
            {
                "nama": "Khodam Naga Putih",
                "fungsi": "Kekuatan spiritual dan proteksi",
                "asal": "Bali",
                "deskripsi": "Khodam ini memberikan kekuatan spiritual dan proteksi dari ancaman gaib."
            },
            {
                "nama": "Khodam Burung Garuda",
                "fungsi": "Kekuatan dan kebijaksanaan",
                "asal": "Jawa",
                "deskripsi": "Khodam ini memberikan kekuatan fisik dan kebijaksanaan dalam memimpin."
            },
            {
                "nama": "Khodam Bidadari Laut",
                "fungsi": "Kecantikan dan pesona",
                "asal": "Sulawesi",
                "deskripsi": "Khodam ini memberikan kecantikan dan pesona yang menarik perhatian."
            },
            {
                "nama": "Khodam Harimau Sumatera Putih",
                "fungsi": "Perlindungan dan kekuatan",
                "asal": "Sumatera",
                "deskripsi": "Khodam ini memberikan perlindungan dari ancaman fisik dan kekuatan fisik."
            }
        ]

    }
}

export default Data