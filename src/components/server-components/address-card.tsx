import { AddressType } from '@/@types/address'
import { NavigateButton } from '../client-components/navigate-button'
import { Badge } from '../ui/badge'

export function AddressCard(data: AddressType) {
  return (
    <div className="flex flex-col gap-4 w-full rounded-lg border p-4">
      <div className="flex gap-4 w-full items-center">
        <div className="flex justify-center items-center w-24 h-24 bg-input rounded-md">
          MAP
        </div>
        <div>
          <Badge
            className={data.planet === 'MARS' ? 'bg-amber-700' : 'bg-sky-700'}
          >
            {data.planet}
          </Badge>
          <h3 className="font-semibold text-xl mt-2">{data.fullName}</h3>
          {data.planet === 'MARS' && data.location && (
            <p>
              Code location:{' '}
              <span className="text-muted-foreground">{data.location}</span>
            </p>
          )}
          {data.planet === 'EARTH' && data.address && (
            <p className="text-muted-foreground">{data.address}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-end md:flex-row gap-4">
        <NavigateButton
          title="Edit address"
          page={`/addresses/${data.id}`}
          size={'lg'}
          variant={'outline'}
          className="px-8"
        />
      </div>
    </div>
  )
}
