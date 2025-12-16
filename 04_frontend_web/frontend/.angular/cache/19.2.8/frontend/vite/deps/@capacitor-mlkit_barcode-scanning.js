import {
  AddressType,
  BarcodeFormat,
  BarcodeValueType,
  EmailFormatType,
  GoogleBarcodeScannerModuleInstallState,
  LensFacing,
  PhoneFormatType,
  Resolution,
  WifiEncryptionType
} from "./chunk-HMNFU6LH.js";
import {
  registerPlugin
} from "./chunk-N52JQX3S.js";
import "./chunk-SNAKS5WD.js";

// node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/index.js
var BarcodeScanner = registerPlugin("BarcodeScanner", {
  web: () => import("./web-M5NLDQMH.js").then((m) => new m.BarcodeScannerWeb())
});
export {
  AddressType,
  BarcodeFormat,
  BarcodeScanner,
  BarcodeValueType,
  EmailFormatType,
  GoogleBarcodeScannerModuleInstallState,
  LensFacing,
  PhoneFormatType,
  Resolution,
  WifiEncryptionType
};
//# sourceMappingURL=@capacitor-mlkit_barcode-scanning.js.map
