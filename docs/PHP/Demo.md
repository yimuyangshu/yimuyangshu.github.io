## CURL
::: details
```php
function httpRequest($url, $postData=[])
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    if(!empty($postData)){
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    }
    // 设置http请求头信息
    $header = ['Accept-Charset: utf-8'];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    //curl注意事项，如果发送的请求是https，必须要禁止服务器端校检SSL证书
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}
```
:::


## 无限递归
::: details
```php
function get_cate($cates,$fid = 0)
{
    static $classes = array();  //静态变量 让数据在递归中保持上次得到的结果
    foreach($cates as $vo){
        if($fid == $vo['parent_id']){
            $classes[] = $vo;
            get_cate($cates,$vo['cate_id']);
        }
    }
    return $classes;
}
```
:::

## 阿拉伯数字换汉字
:::details
```php
public function convertToChinese($number) {
    $chineseNumber = '';
    $chineseDigits = array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
    $chineseUnits = array('', '十', '百', '千', '万', '亿');

    if ($number == 0) {
        return $chineseDigits[0];
    }

    $numberStr = strval($number);
    $length = strlen($numberStr);

    for ($i = 0; $i < $length; $i++) {
        $digit = intval($numberStr[$i]);
        $unit = $length - $i - 1;

        if ($digit != 0) {
            $chineseNumber .= $chineseDigits[$digit] . $chineseUnits[$unit];
        } else {
            // 处理连续的零，只保留一个零
            if ($i < $length - 1 && $numberStr[$i + 1] != '0') {
                $chineseNumber .= $chineseDigits[$digit];
            }
        }
    }

    return $chineseNumber;
}
```
:::