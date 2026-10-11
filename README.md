# 無限食堂 クリア率ダッシュボード（サンプル）

スプラトゥーン レイダース「無限食堂」の101F以降の試行を、マップIDごとに集計する静的ダッシュボードです。  
架空の記録を240件同梱しています。

## 試せる機能

- 構成別の試行数・成功数・成功率の集計
- 3階単位の挑戦エリアによる絞り込み
- 成功率、試行数、構成IDによる並び替え
- 必要ポイント・初期配置による詳細検索（複数選択はAND条件）
- 構成カードからの詳細表示と直近20件の履歴

## ローカルで起動

Pythonが利用できる環境で、このリポジトリのルートから実行します。

```powershell
python -m http.server 8000
```

[http://localhost:8000/](http://localhost:8000/) をブラウザーで開いてください。  
JSONをfetchで読み込むため、HTMLファイルを直接開くのではなくHTTPサーバーを使用します。

## ファイル構成

```text
index.html                    画面と詳細ダイアログ
styles.css                    レイアウト・レスポンシブ表示
app.js                        構成一覧・JSON読込・集計・検索・描画
assets/placeholder.svg        共通のプレースホルダー画像
data/capture/index.json       キャプチャー形式のサンプル月一覧
data/capture/YYYY-MM.json     キャプチャー形式の架空の記録
.github/workflows/deploy-pages.yml  GitHub Pages公開用ワークフロー
```

## 画像について
`assets/maps/<mapId>.jpg` のような形式で追加することで、画像を差し替えることができます。  
（`mapId`は、`01F`, `02F`, ... , `99F`, `blue_A`, `blue_B`, ..., `blue_F` の105種類）

## データ形式

月一覧は次の形式です。

```json
{
  "schemaVersion": 1,
  "source": "capture",
  "months": ["2026-08", "2026-09"]
}
```

各月のファイルは次の形式です。

```json
{
  "schemaVersion": 1,
  "source": "capture",
  "month": "2026-08",
  "attempts": [
    {
      "id": "sample-capture-2026-08-0001",
      "floor": 101,
      "mapId": "20F",
      "result": "success",
      "recordedAt": "2026-08-01T00:00:00Z",
      "source": "capture"
    }
  ]
}
```

- `id`: 重複しない記録ID（このサンプルではUUIDの代わりに識別しやすい固定文字列を使用）
- `floor`: 101以上の整数の挑戦階層
- `mapId`: `01F`〜`99F` または `blue_A`〜`blue_F`
- `result`: `success` または `failure`
- `recordedAt`: ISO 8601形式の日時
- `source`: `capture`

新しい月を追加する場合は、対応する`index.json`の`months`にも月を追加します。  
最高クリア階層は元の仕様どおり、成功した`100 + 3n`階（103、106、109…）だけを対象にします。

## GitHub Pagesで公開

1. リポジトリの **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選択します。
2. このファイル一式を`main`へpushします。
3. `Deploy GitHub Pages`が完了するとサイトが公開されます。

ワークフローはHTML・CSS・JavaScript・`assets/`・`data/`だけを公開用ディレクトリにまとめます。  
相対パスを使用しているため、リポジトリ名を含むGitHub PagesのURLでも動作します。  
公開後の更新も`main`へのpushで反映されます。

## 構成一覧の出典

マップ記号・必要ポイント・初期配置は、[Splatoon RAIDERS Wiki* の無限食堂一覧](https://wikiwiki.jp/splatoon_r/%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3)をもとにしています。  
同表には初期配置が不正確な可能性がある旨の注記があります。  
構成一覧は実データですが、試行記録と集計結果はすべて架空です。
