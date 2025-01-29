import { Address, Package } from "@/lib/helper/type";
import { NextRequest } from "next/server";
import ShipEngine from "shipengine";

export async function POST(req: NextRequest) {
  const {
    shipeToAddress,
    parcels,
  }: { shipeToAddress: Address; parcels: Package[] } = await req.json();
  const shipengine = new ShipEngine({
    apiKey: "TEST_iIy3znDRXdSdxsWh84bETYTt3fj/n73y+jUC8iNxwEk4",
  });

  try {
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: {
          name: "Recipient Name",
          phone: "+92 300 1234567",
          addressLine1: "Your Street Name, House No.",
          addressLine2: "Hyderi",
          cityLocality: "Karachi",
          stateProvince: "Sindh",
          postalCode: "75580",
          countryCode: "PK",
          addressResidentialIndicator: "yes",
        },
        packages: parcels,
      },
      rateOptions: {
        carrierIds: ["se-1553146", "se-1553147", "se-1553148", "se-1553167"],
        // serviceCodes: ["ups_ground"],
      },
    });
    console.log(shipeToAddress, parcels, shipmentDetails);
    return new Response(
      JSON.stringify({ shipeToAddress, parcels, shipmentDetails }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
