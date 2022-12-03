// the use of .map
// example 1:
const basketFruits = [
    {
        nama: 'Jeruk',
        isi: 'Daging Jeruk',
        kulit: 'Kulit Jeruk',
        biji: 'Biji Jeruk'
    },
    {
        nama: 'Pokat',
        isi: 'Daging Pokat',
        kulit: 'Kulit Pokat',
        biji: 'Biji Pokat'
    },
    {
        nama: 'Manggis',
        isi: 'Daging Manggis',
        kulit: 'Kulit Manggis',
        biji: 'Biji Manggis'
    },
]

const gadoGado = basketFruits.map(buah => buah.isi)

// example 2
const dataMobil = [
    {
        nama: 'Innova',
        harga: 'Rp 500.000 / hari',
        deskripsi: 'Some description....',
        tahun: '2016',
        silinder: '2000cc',
        jenisBan: 'Some jenis ban'
    },
    {
        nama: 'Yaris',
        harga: 'Rp 500.000 / hari',
        deskripsi: 'Some description....',
        tahun: '2016',
        silinder: '2000cc',
        jenisBan: 'Some jenis ban'
    },
    {
        nama: 'Fortuner',
        harga: 'Rp 500.000 / hari',
        deskripsi: 'Some description....',
        tahun: '2016',
        silinder: '2000cc',
        jenisBan: 'Some jenis ban'
    }
]

const dataMobilDitampilkan = dataMobil.map(mobil => {
    const dataBaru = {
        nama: mobil.nama,
        harga: mobil.harga,
        deskripsi: mobil.deskripsi
    }

    return dataBaru
})

// the use of .reduce
const setOfNumber = [1, 2, 3, 4, 5, 6]
const sumSetOfNumber = setOfNumber.reduce((akumulatif, current) => akumulatif + current, 0)
