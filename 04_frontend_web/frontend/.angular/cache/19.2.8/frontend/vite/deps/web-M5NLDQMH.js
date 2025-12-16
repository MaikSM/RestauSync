import {
  BarcodeValueType,
  LensFacing
} from "./chunk-HMNFU6LH.js";
import {
  CapacitorException,
  ExceptionCode,
  WebPlugin
} from "./chunk-N52JQX3S.js";
import {
  __async
} from "./chunk-SNAKS5WD.js";

// node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/web.js
var BarcodeScannerWeb = class extends WebPlugin {
  constructor() {
    super(...arguments);
    this._isSupported = "BarcodeDetector" in window;
    this.errorVideoElementMissing = "videoElement must be provided.";
    this.eventBarcodesScanned = "barcodesScanned";
  }
  startScan(options) {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnavailableException();
      }
      if (!(options === null || options === void 0 ? void 0 : options.videoElement)) {
        throw new Error(this.errorVideoElementMissing);
      }
      this.videoElement = options.videoElement;
      this.stream = yield navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: (options === null || options === void 0 ? void 0 : options.lensFacing) === LensFacing.Front ? "user" : "environment"
          }
        },
        audio: false
      });
      options.videoElement.srcObject = this.stream;
      yield options.videoElement.play();
      const barcodeDetector = new BarcodeDetector();
      this.intervalId = window.setInterval(() => __async(this, null, function* () {
        if (!options.videoElement) {
          return;
        }
        const barcodes = yield barcodeDetector.detect(options.videoElement);
        if (barcodes.length === 0) {
          return;
        } else {
          this.handleScannedBarcodes(barcodes);
        }
      }), 500);
    });
  }
  stopScan() {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnavailableException();
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = void 0;
      }
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = void 0;
      }
      if (this.videoElement) {
        this.videoElement.srcObject = null;
        this.videoElement = void 0;
      }
    });
  }
  readBarcodesFromImage(_options) {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  scan() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  isSupported() {
    return __async(this, null, function* () {
      return {
        supported: this._isSupported
      };
    });
  }
  enableTorch() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  disableTorch() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  toggleTorch() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  isTorchEnabled() {
    return __async(this, null, function* () {
      throw this.createUnavailableException;
    });
  }
  isTorchAvailable() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  setZoomRatio(_options) {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  getZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  getMinZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  getMaxZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  openSettings() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  isGoogleBarcodeScannerModuleAvailable() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  installGoogleBarcodeScannerModule() {
    return __async(this, null, function* () {
      throw this.createUnavailableException();
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      try {
        const result = yield navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: result.state
        };
      } catch (error) {
        return {
          camera: "prompt"
        };
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      try {
        const stream = yield navigator.mediaDevices.getUserMedia({
          video: true
        });
        stream.getTracks().forEach((track) => track.stop());
        return {
          camera: "granted"
        };
      } catch (error) {
        return {
          camera: "denied"
        };
      }
    });
  }
  createUnavailableException() {
    return new CapacitorException("This plugin method is not available on this platform.", ExceptionCode.Unavailable);
  }
  handleScannedBarcodes(barcodes) {
    const result = {
      barcodes: barcodes.map((barcode) => ({
        cornerPoints: [[barcode.cornerPoints[0].x, barcode.cornerPoints[0].y], [barcode.cornerPoints[1].x, barcode.cornerPoints[1].y], [barcode.cornerPoints[2].x, barcode.cornerPoints[2].y], [barcode.cornerPoints[3].x, barcode.cornerPoints[3].y]],
        displayValue: barcode.rawValue,
        rawValue: barcode.rawValue,
        format: barcode.format.toUpperCase(),
        valueType: BarcodeValueType.Unknown
      }))
    };
    this.notifyListeners(this.eventBarcodesScanned, result);
  }
};
export {
  BarcodeScannerWeb
};
//# sourceMappingURL=web-M5NLDQMH.js.map
