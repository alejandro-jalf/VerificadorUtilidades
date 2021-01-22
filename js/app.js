var app = new Vue({
    el: "#app",
    data() {
        return {
            sucurzal: 'ZR',
            nameSucursal: 'Zaragoza',
            dataUtilidades: [
                {articulo: "0118106", codigoBarras: "7501021146102", nombre: "Pastilla Des. Aglay Pino 80gr", costo: "11.000000",	existencia: "8.787348",	precio1: "11.000000",	u1: "0.20115018181819",	precio2 :"9.350000"	, u2: "0.06017668449198"},
                {articulo: "0850001", codigoBarras: "0850001", nombre: "Marg Primavera Sal 90gr", costo: "1056.000000",	existencia: "10.625000",	precio1: "12.500000",	u1: "0.15000000000000",	precio2 :"11.700000"	, u2: "0.09188034188035"},
                {articulo: "0850003", codigoBarras: "7501032600839", nombre: "Margarina Iberia S/Sal 225gr", costo: "2.000000",	existencia: "20.400000",	precio1: "24.500000",	u1: "0.16734693877552",	precio2 :"22.450000"	, u2: "0.09131403118041"},
                {articulo: "0125708", codigoBarras: "7501071120077", nombre: "Ref Squirt Toronja Peñafiel 2lt", costo: "16.000000",	existencia: "17.966993",	precio1: "21.500000",	u1: "0.16432590697675",	precio2 :"19.900000"	, u2: "0.09713603015076"},
                {articulo: "0117018", codigoBarras: "7501017364695", nombre: "Hig. LYS C/4", costo: "8.000000",	existencia: "11.623200",	precio1: "14.000001",	u1: "0.16977148787347",	precio2 :"12.800000"	, u2: "0.09193750000000"},
                {articulo: "0129596", codigoBarras: "20744831121759", nombre: "Vel. Rep #12 Virgen de Gpe. Luz Eterna", costo: "31.000000",	existencia: "5.892800",	precio1: "7.500000",	u1: "0.21429333333334",	precio2 :"6.500000"	, u2: "0.09341538461539"},
                {articulo: "0129009", codigoBarras: "7502002342940", nombre: "Vel. Limonero Liso La Gloria", costo: "1.000000",	existencia: "9.767200",	precio1: "12.000000",	u1: "0.08606666666667",	precio2 :"10.800000"	, u2: "0.09562962962963"},
                {articulo: "0114009", codigoBarras: "7501026027529", nombre: "Det. Blanca Nieves 2kg", costo: "14.000000",	existencia: "55.726400",	precio1: "66.500000",	u1: "0.16200902255640",	precio2 :"61.600000"	, u2: "0.09535064935065"},
                {articulo: "0114526", codigoBarras: "7500435146678", nombre: "Det. Liq Salvo Limon 215ml", costo: "56.000000",	existencia: "9.918000",	precio1: "12.000000",	u1: "0.17350000000000",	precio2 :"11.000000"	, u2: "0.09836363636364"},
                {articulo: "0128247", codigoBarras: "7501018310127", nombre: "Spaghetti Italiano La Moderna 200gr", costo: "5.000000",	existencia: "4.960000",	precio1: "6.000000",	u1: "0.17333333333334",	precio2 :"5.500000"	, u2: "0.09818181818182"},
                {articulo: "0101005", codigoBarras: "7501060500019", nombre: "Aceite Patrona 1lt", costo: "62.000000",	existencia: "24.166667",	precio1: "28.000000",	u1: "0.13690475000000",	precio2 :"26.780000"	, u2: "0.09758525018671"},
                {articulo: "0101040", codigoBarras: "7501052475202", nombre: "Vinagre CJ Manzana 500ml", costo: "16.000000",	existencia: "10.530000",	precio1: "12.500000",	u1: "0.15760000000000",	precio2 :"11.500000"	, u2: "0.08434782608696"},
                {articulo: "0101072", codigoBarras: "7501060500071", nombre: "Aceite El Faro 900ml", costo: "68.000000",	existencia: "22.037250",	precio1: "25.500000",	u1: "0.13579411764706",	precio2 :"24.400000"	, u2: "0.09683401639345"},
                {articulo: "0101153", codigoBarras: "7501039122105", nombre: "Aceite Ave 850ml", costo: "7.000000",	existencia: "22.090000",	precio1: "25.500000",	u1: "0.13372549019608",	precio2 :"24.500000"	, u2: "0.09836734693878"},
                {articulo: "0102018", codigoBarras: "7501003300461", nombre: "Mayo. MC #8 190gr", costo: "99.000000",	existencia: "15.230000",	precio1: "18.500000",	u1: "0.17675675675676",	precio2 :"16.800000"	, u2: "0.09345238095239"},
                {articulo: "0102115", codigoBarras: "7501003335128", nombre: "Mostaza  MC SQ . 260gr.", costo: "12.000000",	existencia: "16.790000",	precio1: "20.000000",	u1: "0.16050000000000",	precio2 :"18.500000"	, u2: "0.09243243243244"},
                {articulo: "0103347", codigoBarras: "759684151354", nombre: "Biberon Jaloma Cristalino 4OZ", costo: "11.000000",	existencia: "13.841120",	precio1: "16.500000",	u1: "0.16114424242425",	precio2 :"15.210000"	, u2: "0.08999868507561"},
                {articulo: "0104034", codigoBarras: "7501108013396", nombre: "Escoba Abanico Mediana Max Ideal", costo: "22.000000",	existencia: "26.935200",	precio1: "32.500000",	u1: "0.17122461538462",	precio2 :"29.700000"	, u2: "0.09309090909091"},
                {articulo: "0104036", codigoBarras: "7501014701530", nombre: "Escoba Nueva Era EN-12", costo: "5.000000",	existencia: "32.642400",	precio1: "39.000000",	u1: "0.16301538461539",	precio2 :"35.500000"	, u2: "0.08049577464789"},
                {articulo: "0104045", codigoBarras: "7501728040987", nombre: "Jalador Uso Rudo 40cm. JL-1", costo: "6.000000",	existencia: "34.243200",	precio1: "40.000000",	u1: "0.14392000000000",	precio2 :"37.800000"	, u2: "0.09409523809524"},
                {articulo: "0105013", codigoBarras: "7501693620030", nombre: "Cafe Serrano 20gr", costo: "1791.000000",	existencia: "1.981818",	precio1: "3.000000",	u1: "0.33939400000000",	precio2 :"2.200000"	, u2: "0.09917363636364"},
                {articulo: "0105014", codigoBarras: "7501410501031", nombre: "Cafe Cordoba 250gr", costo: "7.000000",	existencia: "31.000000",	precio1: "37.000000",	u1: "0.16216216216217",	precio2 :"34.400000"	, u2: "0.09883720930233"},
                {articulo: "0105082", codigoBarras: "7501038410135", nombre: "Cafe Fres Kaf 50gr", costo: "16.000000",	existencia: "12.910000",	precio1: "15.500000",	u1: "0.16709677419355",	precio2 :"14.300000"	, u2: "0.09720279720280"},
                {articulo: "0108301", codigoBarras: "7501008001790", nombre: "Cer. Extra Arandanos 710gr", costo: "2.000000",	existencia: "81.790000",	precio1: "102.000000",	u1: "0.19813725490197",	precio2 :"90.000000"	, u2: "0.09122222222223"},
                {articulo: "0108361", codigoBarras: "7501008018125", nombre: "Cer ChocoKrispis Kellogs 290gr", costo: "7.000000",	existencia: "23.540000",	precio1: "28.000000",	u1: "0.15928571428572",	precio2 :"26.000000"	, u2: "0.09461538461539"},
                {articulo: "0109016", codigoBarras: "7501017005024", nombre: "Chile Rajas La Costeña 220gr", costo: "60.000000",	existencia: "10.416667",	precio1: "12.000000",	u1: "0.13194441666667",	precio2 :"10.500000"	, u2: "0.00793647619048"},
                {articulo: "0110042", codigoBarras: "7501095425110", nombre: "Chocomilk Lata 2kg", costo: "14.000000",	existencia: "140.900000",	precio1: "170.000000",	u1: "0.17117647058824",	precio2 :"155.200000"	, u2: "0.09213917525774"},
                {articulo: "0110082", codigoBarras: "7506205804700", nombre: "Cal-C-Tose Lata 1.9kg", costo: "2.000000",	existencia: "138.190000",	precio1: "165.000000",	u1: "0.16248484848485",	precio2 :"152.000000"	, u2: "0.09085526315790"},
                {articulo: "0111047", codigoBarras: "7802800705399", nombre: "Polvo Zuko Fresa 15gr", costo: "1.000000",	existencia: "2.911600",	precio1: "3.500000",	u1: "0.16811428571429",	precio2 :"3.200000"	, u2: "0.09012500000000"},
                {articulo: "0111269", codigoBarras: "735257002544", nombre: "Gela D Gari Grosella 120gr", costo: "56.000000",	existencia: "8.640000",	precio1: "10.500000",	u1: "0.17714285714286",	precio2 :"9.500000"	, u2: "0.09052631578948"},
                {articulo: "0112072", codigoBarras: "7504024420026", nombre: "Hor. Estrella Arroz 500ml", costo: "17.000000",	existencia: "23.960000",	precio1: "28.500000",	u1: "0.15929824561404",	precio2 :"26.500000"	, u2: "0.09584905660378"},
                {articulo: "0113026", codigoBarras: "7502208805232", nombre: "Plato #9 Div Orion C/25", costo: "27.000000",	existencia: "10.138400",	precio1: "12.000000",	u1: "0.15513333333334",	precio2 :"11.200000"	, u2: "0.09478571428572"},
                {articulo: "0113038", codigoBarras: "7501431201064", nombre: "Vaso #106 Convermex C/25", costo: "39.000000",	existencia: "6.681600",	precio1: "7.900000",	u1: "0.15422784810127",	precio2 :"7.200001"	, u2: "0.07200012888888"},
                {articulo: "0113039", codigoBarras: "7501431207165", nombre: "Vaso #716 Convermex C/25", costo: "33.000000",	existencia: "19.499948",	precio1: "23.500000",	u1: "0.17021497872341",	precio2 :"21.500000"	, u2: "0.09302567441861"},
                {articulo: "0113106", codigoBarras: "7502208808004", nombre: "Plato No. 10D Reyma C/25", costo: "1.000000",	existencia: "12.713600",	precio1: "14.999999",	u1: "0.15242661016178",	precio2 :"14.000001"	, u2: "0.09188577915102"},
                {articulo: "0113223", codigoBarras: "619684005012", nombre: "Tenedor Past Margarita C/50", costo: "112.000000",	existencia: "5.974000",	precio1: "7.000000",	u1: "0.14657142857143",	precio2 :"6.500000"	, u2: "0.08092307692308"},
                {articulo: "0113256", codigoBarras: "13256", nombre: "Bolsa Basura Members Amar 124lt", costo: "70.000000",	existencia: "2.389921",	precio1: "3.500000",	u1: "0.31716542857143",	precio2 :"2.650000"	, u2: "0.09814301886793"},
                {articulo: "0113334", codigoBarras: "7502208805324", nombre: "Charola #855 Mariel C/50", costo: "14.000000",	existencia: "17.144800",	precio1: "20.500000",	u1: "0.16366829268293",	precio2 :"19.000000"	, u2: "0.09764210526316"},
                {articulo: "0113403", codigoBarras: "7502208805270", nombre: "Plato PH10 Reyma C/25", costo: "20.000000",	existencia: "13.514000",	precio1: "16.500000",	u1: "0.18096969696970",	precio2 :"14.999999"	, u2: "0.09906660660445"},
                {articulo: "0113533", codigoBarras: "7501049418755", nombre: "Vaso Bosscup #14 C/50", costo: "27.000000",	existencia: "20.996000",	precio1: "25.000000",	u1: "0.16016000000000",	precio2 :"23.000000"	, u2: "0.08713043478261"},
                {articulo: "0113559", codigoBarras: "7501010508201", nombre: "Plato Urpri #8D C/20", costo: "32.000000",	existencia: "9.198800",	precio1: "11.000000",	u1: "0.16374545454546",	precio2 :"10.000000"	, u2: "0.08012000000000"},
                {articulo: "0113575", codigoBarras: "7501219112193", nombre: "Vaso #14 Primo C/50", costo: "7.000000",	existencia: "25.844800",	precio1: "31.000000",	u1: "0.16629677419355",	precio2 :"28.500001"	, u2: "0.09316494409948"},
                {articulo: "0113691", codigoBarras: "7501782311061", nombre: "Vaso San Jorge #10 c/50", costo: "4.000000",	existencia: "18.780400",	precio1: "22.500000",	u1: "0.16531555555556",	precio2 :"20.400000"	, u2: "0.07939215686275"},
                {articulo: "0114016", codigoBarras: "7501026004629", nombre: "Det. Roma 250gr", costo: "28.000000",	existencia: "7.250000",	precio1: "8.500000",	u1: "0.14705882352942",	precio2 :"8.000000"	, u2: "0.09375000000000"},
                {articulo: "0114018", codigoBarras: "7501026004537", nombre: "Det. Roma 2kg", costo: "10.000000",	existencia: "57.304000",	precio1: "69.000000",	u1: "0.16950724637682",	precio2 :"63.500000"	, u2: "0.09757480314961"},
                {articulo: "0114075", codigoBarras: "7501026004605", nombre: "Det. Roma 1Kg", costo: "11.000000",	existencia: "28.814400",	precio1: "34.000000",	u1: "0.15251764705883",	precio2 :"32.000000"	, u2: "0.09955000000000"},
                {articulo: "0114265", codigoBarras: "7501199406671", nombre: "Det. Persil Oro Reg. 900gr", costo: "6.000000",	existencia: "25.520000",	precio1: "30.000000",	u1: "0.14933333333334",	precio2 :"28.200000"	, u2: "0.09503546099291"},
                {articulo: "0114461", codigoBarras: "7501026023026", nombre: "Det. Carisma 2kg", costo: "9.000000",	existencia: "63.022800",	precio1: "75.500000",	u1: "0.16526092715232",	precio2 :"70.000000"	, u2: "0.09967428571429"},
                {articulo: "0955144", codigoBarras: "0955144", nombre: "Hojaldra pan", costo: "170.000000",	existencia: "10.003840",	precio1: "13.000001",	u1: "0.23047390534817",	precio2 :"11.000000"	, u2: "0.09056000000000"},
            ],
            utils: utils,
            low: false,
            topTable: 200,
            alert: {
                show: false,
                title: 'Ruta no encontrada',
                message: 'Error 404, La direccion url que ingreso en el navegador es incorrecto',
                info: 'Necesita verificar la ruta proporcionada por el encargado',
            },
            isVisibleSelect: false,
        }
    },
    mounted() {
        const that = this;
        that.topTable = document.getElementById("tableDataId").getBoundingClientRect();
        if (that.topTable.top <= 0) {
            that.low = true;
        } else {
            that.low = false;
        }
        window.addEventListener("scroll", function () {
            that.topTable = document.getElementById("tableDataId").getBoundingClientRect();
            if (that.topTable.top <= 0) {
                that.low = true;
            } else {
                that.low = false;
            }
        });

        let distanciaLeftFooter = 0;
        document.getElementById("tableDataId").addEventListener("scroll", function() {
            if (that.low) {
                distanciaLeftFooter = document.getElementById("totalIdFoot").getBoundingClientRect().left;
                document.getElementById("headerTableId").style.left = `${distanciaLeftFooter}px`;
            }
        });

        this.setSucurzal();
    },
    updated() {
        if (this.low) {
            this.setWidthHeader();
            distanciaLeftFooter = document.getElementById("totalIdFoot").getBoundingClientRect().left;
            document.getElementById("headerTableId").style.left = `${distanciaLeftFooter}px`;
        }
    },
    computed: {
        getTotal1 () {
            let total = 0;
            this.dataUtilidades.map((articulo) => {
                if (parseFloat(articulo.u1) < 0.1) total++;
            });
            return total;
        },
        getTotal2 () {
            let total = 0;
            this.dataUtilidades.map((articulo) => {
                if (parseFloat(articulo.u2) < 0.1) total++;
            });
            return total;
        },
    },
    methods: {
        showAlert(title, message, info) {
            this.alert.show = true;
            this.alert.title = title;
            this.alert.message = message;
            this.alert.info = info;
        },
        setSucurzal() {
            // Formato de la ruta:
            // https://../index.html?sucursal=any&encoded=has_encript
            const ruta = (window.location.href).split("?");
            if (ruta.length <= 1 || ruta.length >= 3) {
                this.showAlert(
                    'Ruta no localizada',
                    'Error 404, La direccion url ingresada en el navegador no esta de manera correcta',
                    'Verifique la ruta proporcionada por el encargado'
                );
                return;
            }
            const data = ruta[1].split("&");
            if (data.length !== 2) {
                this.showAlert(
                    'Error al ingresar la url',
                    'Error 400, La estructura de la direccion url no esta escrita de manera correcta, hace falta que defina encoded y sucursal',
                    'Caracter "?" no localizado'
                );
                return;
            }

            if (data[1].length < 8 ) {
                this.showAlert(
                    'Datos extras son invalidos',
                    'Error 400, La estructura de la direccion url no esta escrita de manera correcta, hace falta que de defina encoded',
                    'Datos de encoded estan mal escritos en la url'
                );
                return;
            }

            if (data[0].length < 9 || (data[0].slice(0, 8) !== "sucursal") ) {
                this.showAlert(
                    'Datos extras son invalidos',
                    'Error 400, La estructura de la direccion url no esta escrita de manera correcta, hace falta que de defina sucursal',
                    'Datos de encoded estan mal escritos en la url'
                );
                return;
            }

            const noValidEncoded = () => {
                this.showAlert(
                    'Codigo de encargado incorrecto',
                    'Error 401, El encoded enviado no es valido, necesita validar que es usted el encargado de tienda',
                    'No tiene el codigo de autorizacion para ver los datos',
                );
            }

            if ((data[0].toUpperCase().trim()).slice(9) === "ALL") {
                if (data[1].slice(8).trim() === "a1a17e12d3a2517a0d3f1e5e69ea3356fde13f34") {
                    this.sucurzal = "ZR";
                    this.isVisibleSelect = true;
                } else noValidEncoded();
                return;
            }

            this.isVisibleSelect = false;

            if ((data[0].toUpperCase().trim()).slice(9) === "ZR") {
                if (data[1].slice(8).trim() === "117e1218aed75707c73d3d78026d3c7ac4e6187f") {
                    this.nameSucursal = "Zaragoza";
                    this.sucurzal = "ZR";
                } else noValidEncoded();
                return;
            }

            if ((data[0].toUpperCase().trim()).slice(9) === "VC") {
                if (data[1].slice(8).trim() === "dd2e1300fb38460706d24e5154b5593f979cd7f1") {
                    this.nameSucursal = "Victoria";
                    this.sucurzal = "VC";
                } else noValidEncoded();
                return;
            }
            
            if ((data[0].toUpperCase().trim()).slice(9) === "OU") {
                if (data[1].slice(8).trim() === "10272bf74b28f4859e99660e65bd8bd42f56fd3c") {
                    this.nameSucursal = "Oluta";
                    this.sucurzal = "OU";
                } else noValidEncoded();
                return;
            }

            if ((data[0].toUpperCase().trim()).slice(9) === "JL") {
                if (data[1].slice(8).trim() === "177b7c9d74171b75b04e16ade125f410509b6d74") {
                    this.nameSucursal = "Jaltipan";
                    this.sucurzal = "JL";
                } else noValidEncoded();
                return;
            }

            this.showAlert(
                'Sucursal no localizada',
                'La sucursal que intenta localizar no existe en nuestros registros',
                'Verfique si las siglas de la sucursal son correctas'
            );
        },
        setClass(utilidad) {
            if (utilidad === "NULL") return "bg-warning";
            if (parseFloat(utilidad) < 0.1) return "bg-warning";
            return "";
        },
        setWidthHeader() {
            document.getElementById("hart_fix").style.width = `${document.getElementById("hart").clientWidth}px`;
            document.getElementById("hcod_fix").style.width = `${document.getElementById("hcod").clientWidth}px`;
            document.getElementById("hnom_fix").style.width = `${document.getElementById("hnom").clientWidth}px`;
            document.getElementById("hexi_fix").style.width = `${document.getElementById("hexi").clientWidth}px`;
            document.getElementById("hcos_fix").style.width = `${document.getElementById("hcos").clientWidth}px`;
            document.getElementById("hpr1_fix").style.width = `${document.getElementById("hpr1").clientWidth}px`;
            document.getElementById("hut1_fix").style.width = `${document.getElementById("hut1").clientWidth}px`;
            document.getElementById("hpr2_fix").style.width = `${document.getElementById("hpr2").clientWidth}px`;
            document.getElementById("hut2_fix").style.width = `${document.getElementById("hut2").clientWidth}px`;
        },
        getWidthHeader(referencia) {
            console.log(referencia);
            // return referencia.getWindowWidth();
        },
    },
});
