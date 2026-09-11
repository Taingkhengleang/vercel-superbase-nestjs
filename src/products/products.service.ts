import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import FormData from 'form-data';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  create(createProductDto: CreateProductDto) {
    return { message: 'This action adds a new product', createProductDto };
  }

  findAll() {
    
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  getJsonData() {
    return {
        'success': true,
        'message': 'Data retrieved successfully',
        'data' : {
    "query_id": "VLD-2026-0810-000512",
    "mode": "RETRIEVAL",
    "status": "COMPLETED",
    "processed_at": "2026-08-10T09:41:07Z",
    "identity": {
        "match": "MATCH"
    },
    "observation_window": {
        "from": "2025-05",
        "to": "2026-04"
    },
    "employment": {
        "status": "ACTIVE",
        "data_as_of": "2026-04",
        "distinct_employers": 2,
        "records_count": 20
    },
    "employers": [
        {
            "employer_id": "E1",
            "name_as_filed": "Amana Solution Co., Ltd.",
            "registered_name": "AMANA SOLUTION CO., LTD.",
            "tax_id": "K001-901234567",
            "company_registered": "2019-03-14",
            "employee_since": "2023-02",
            "employee_since_source": "REGISTRY"
        },
        {
            "employer_id": "E2",
            "name_as_filed": "ABC Co., Ltd.",
            "registered_name": "ABC (CAMBODIA) CO., LTD.",
            "tax_id": "K001-887654321",
            "company_registered": "2015-06-02",
            "employee_since": "2025-08",
            "employee_since_source": "FIRST_OBSERVED"
        }
    ],
    "declarations": [
        {
            "month": "2025-05",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,080",
            "usd": "980.39"
        },
        {
            "month": "2025-06",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,085",
            "usd": "979.19"
        },
        {
            "month": "2025-07",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,095",
            "usd": "976.80"
        },
        {
            "month": "2025-08",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,090",
            "usd": "978.00"
        },
        {
            "month": "2025-08",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,090",
            "usd": "500.00"
        },
        {
            "month": "2025-09",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,100",
            "usd": "975.61"
        },
        {
            "month": "2025-09",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,100",
            "usd": "500.00"
        },
        {
            "month": "2025-10",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,095",
            "usd": "976.80"
        },
        {
            "month": "2025-10",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,095",
            "usd": "500.00"
        },
        {
            "month": "2025-11",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,090",
            "usd": "978.00"
        },
        {
            "month": "2025-11",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,090",
            "usd": "500.00"
        },
        {
            "month": "2025-12",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,105",
            "usd": "974.42"
        },
        {
            "month": "2025-12",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,105",
            "usd": "500.00"
        },
        {
            "month": "2026-01",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,120",
            "usd": "970.87"
        },
        {
            "month": "2026-01",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,120",
            "usd": "500.00"
        },
        {
            "month": "2026-02",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,100",
            "usd": "975.61"
        },
        {
            "month": "2026-03",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,100",
            "usd": "975.61"
        },
        {
            "month": "2026-03",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,100",
            "usd": "500.00"
        },
        {
            "month": "2026-04",
            "employer_id": "E1",
            "position": "web developer",
            "amount": "4,000,000",
            "curr": "KHR",
            "fx_khr_usd": "4,100",
            "usd": "975.61"
        },
        {
            "month": "2026-04",
            "employer_id": "E2",
            "position": "accounting",
            "amount": "500",
            "curr": "USD",
            "fx_khr_usd": "4,100",
            "usd": "500.00"
        }
    ]
}
    }
  }

  async getDataFrom(data: { national_id: string; full_name: string; date_of_birth: string }) {
    const formData = new FormData();

    formData.append('national_id', data.national_id);
    formData.append('full_name', data.full_name);
    formData.append('date_of_birth', data.date_of_birth);

    const response = await axios.post(
      'https://airport-alerts-declined-pharmacology.trycloudflare.com/api/v1/engine/kyc/convert_vri_score',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      },
    );

    if(response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
    }

    return response.data;
  }
}
