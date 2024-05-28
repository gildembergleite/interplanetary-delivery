import { AddressType } from '@/@types/address'
import { BaseApi } from './base-api'

interface ApiAddressesConstructorProps {
  baseURL: string
  defaultHeaders?: Record<string, string>
}

export class ApiAddresses extends BaseApi {
  // eslint-disable-next-line no-useless-constructor
  constructor({ baseURL, defaultHeaders }: ApiAddressesConstructorProps) {
    super(baseURL, defaultHeaders)
  }

  public getAddresses(): Promise<AddressType[]> {
    return this.get({ endpoint: '/addresses' })
  }

  public getAddressById({ id }: { id: string }): Promise<AddressType> {
    return this.get({ endpoint: `/addresses/${id}` })
  }

  public async addAddress(props: AddressType): Promise<void> {
    return this.patch({ endpoint: `/addresses/${props.id}`, body: props })
  }

  public async updateAddress(props: AddressType): Promise<void> {
    return this.patch({ endpoint: `/addresses/${props.id}`, body: props })
  }
}
